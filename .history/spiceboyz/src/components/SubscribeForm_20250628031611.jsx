import React, { useState } from "react"; 
import emailjs from "@emailjs/browser"; //  Import EmailJS

//Import Firestore functions from firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

import { db } from "../firebase/config" //pull the config data fromn the database config file  (db is in communication with ou api)


const SubscribeForm = () => {
    const [ email, setEmail] = useState("");
    const [message , setStatus] = useState(""); //display status (error or success message)
    const [name, setName] = useState("");


    //This function prevents page from refreshing 
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            await addDoc(collection(db, "subscribers"), {
                name: name, 
                email: email, //save users email 
                timestamp: serverTimestamp()
            });
            //Send email with EmailJS
            await emailjs.send(
                    "service_7ph7szl",     //  emailjs service ID
                    "template_lrol84s",    //  emailjs template ID
                {
                    name: name, // the users name 
                    user_email:email, //the users email
                },
                    "55yoe56xa1phFh3yL"      //  public key
      );
            //Show success message
            setStatus("THANKS FOR SUBSCRIBING")
            setEmail("")
        }catch (error){
            //show error 
            console.error("Incorrect email:", error);
            setStatus("Something is wrong with credentials.");
        }
    
};


  return ( //Subomi horrible UI 
    <div>
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button type="submit">Subscribe</button>
</form>

      {/* Display success or error message */}
      <p>{message}</p>
    </div>
  );

};


export default SubscribeForm;