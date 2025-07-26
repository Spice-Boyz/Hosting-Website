// import React, { useState } from "react"; 

// //Import Firestore functions from firebase
// import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

// import { db } from "../firebase/config" //pull the config data fromn the database config file  (db is in communication with ou api)


// const SubscribeForm = () => {
//     const [ email, setEmail] = useState("");
//     const [message , setStatus] = useState(""); //display status (error or success message)


//     //This function prevents page from refreshing 
//     const handleSubmit = async (e) => {
//         e.preventDefault(); 

//         try {
//             await addDoc(collection(db, "subscribers"), {
//                 email: email, //save users email 
//                 timestamp: serverTimestamp()
//             });

//             //Show success message
//             setStatus("WELCOME! YOU HAVE SUBSCRIBED TO SPICEBOYZ ENTERTAINMENT!!")
//             setEmail("")
//         }catch (error){
//             //show error 
//             console.error("Incorrect email:", error);
//             setStatus("Something is wrong with credentials.");
//         }
    
// };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Input for user to type their email */}
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Update email state on change
//           required
//         />
//         {/* Submit button */}
//         <button type="submit">Subscribe</button>
//       </form>

//       {/* Display success or error message */}
//       <p>{message}</p>
//     </div>
//   );

// };


// // Export the component so it can be used in other parts of the app
// export default SubscribeForm;
import React, { useState } from "react"; // ❌ Removed invalid 'use' import

// Import Firestore functions from Firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Import Firestore connection (db) from your config
import { db } from "../firebase/config"; // db is your link to Firestore

const SubscribeForm = () => {
  const [email, setEmail] = useState("");              // Store user email input
  const [message, setStatus] = useState("");           // Store success/error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Save the email and a timestamp to the "subscribers" collection
      await addDoc(collection(db, "subscribers"), {
        email: email,
        timestamp: serverTimestamp()
      });

      // Success message
      setStatus("🎉 WELCOME! YOU HAVE SUBSCRIBED TO SPICEBOYZ ENTERTAINMENT!");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error adding email:", error);
      setStatus("❌ Something is wrong with your credentials.");
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
          onChange={(e) => setEmail(e.target.value)}
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

export default SubscribeForm;
