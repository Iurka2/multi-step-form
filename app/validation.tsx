import * as Yup from 'yup';



// Define a validationSchema object to specify validation rules for the 2 forms
export const validationSchema = {
//For the personal info from
  personal: Yup.object({
    name: Yup.string()
     .required("Name required"),

    phone: Yup.string()
    .required("Phone required")
    .matches(/^(\+?\d{9,})$/, "Invalid phone nr."),

    email: Yup.string()
      .email("Invalid email")
      .required("Email required"),

  }),
   //For the address info form 
  location: Yup.object({
    country: Yup.string()
    .required("Country required"),

	  address: Yup.string()
      .required("Address Required"),

    city: Yup.string()
    .required("City Required"),
    
    zip: Yup.string()
    .required("Zip code requred")
    .matches(/^(\+?\d{4,})$/, "Invalid zip code"),
  }),
};