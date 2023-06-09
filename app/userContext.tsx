import React from "react";

// Create a UserContext using React's Context API
// This UserContext will hold the current user's data and provide a function to update it.
export const UserContext = React.createContext({
    // 'user' is an object that holds the user's information, which is initially set to empty values.
  user: { name: "", email: "", phone: "",country: "",city: "",zip: "",address: "" },

   // 'setUser' is a function that will be used to update the 'user' data. 
  // It's initially an empty function, it will be updated in the actual context provider in the application.
  setUser: (user: { name: string; email: string; phone: string; country: string; city: string; zip: string; address: string }) => {}

});
