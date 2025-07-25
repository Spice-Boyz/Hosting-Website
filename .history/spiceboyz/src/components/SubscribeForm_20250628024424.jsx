import React, { useState } from "react"; 
import emailjs from "@emailjs/browser"; //  Import EmailJS

//Import Firestore functions from firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

import { db } from "../firebase/config" //pull the config data fromn the database config file  (db is in communication with ou api)


const SubscribeForm = () => {
    const [ email, setEmail] = useState("");
    const [message , setStatus] = useState(""); //display status (error or success message)


    //This function prevents page from refreshing 
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            await addDoc(collection(db, "subscribers"), {
                email: email, //save users email 
                timestamp: serverTimestamp()
            });
            //Send email with EmailJS
            await emailjs.send(
                    "service_7ph7szl",     //  Replace with your actual service ID
                    "template_xl3kd0n",    //  Replace with your template ID
                {
                    name: "SpiceBoyz Entertainment",
                    user_email:email,
                    time: new Date().toLocaleString(),
                    message: "Thanks for subscribing! Stay tuned for our hottest drops and incoming events."
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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input for user to type their email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          required
        />
        {/* Submit button */}
        <button type="submit">Subscribe</button>
      </form>

      {/* Display success or error message */}
      <p>{message}</p>
    </div>
  );

};


// Export the component so it can be used in other parts of the app
export default SubscribeForm;