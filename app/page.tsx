'use client';

import { Formik} from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import SecondPage from './second-page';


export default function Home() {


  const ArrowRigth = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='arrows' ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
     .required("Name required"),

    phone: Yup.string()
    .required("Phone required")
    .matches(/^(\+?\d{9,})$/, "Invalid phone nr."),

    email: Yup.string()
      .email("Invalid email")
      .required("Email required"),

    country: Yup.string()
    .required("Country required"),

	  address: Yup.string()
      .required("Address Required"),

    city: Yup.string()
    .required("City Required"),
    
    zip: Yup.string()
    .required("zip code requred")
    .matches(/^(\+?\d{4,})$/, "Invalid zip code"),
    
  });


  return (
    <main>
      <section className='middle_section'>
       <h1 className='heading'>Personal Information</h1>
        <h2 className='sub_heading'>Please provide your name,email adress,and phone number.</h2>
<Formik
       initialValues={{ name: '', phone: "", email: ""}}
       validationSchema={SignupSchema}
       onSubmit={ async () => {console.log()}}>


       {({
        values,
         errors,
         touched,
         handleChange,
         handleSubmit,
      }) => (

<form className="form_container" onSubmit={handleSubmit}>

    <label className='basic_lable' >Your Name</label>
      <input 
        type="text" 
        name='name' 
        value={values.name}
        onChange={handleChange}
        className="basic_imput" 
      
        />
      <span className="error_message">{errors.name && touched.name && errors.name }</span>
    
      <label className='basic_lable'  >Phone</label>
        <input 
          type="tel" 
          name='phone' 
          value={values.phone}
          onChange={handleChange}
          className="basic_imput"      
      
          />
    <span className="error_message">{errors.phone && touched.phone && errors.phone}</span>
    
    
    <label className='basic_lable' >Email address</label>
        <input 
          type="email"  
          name='email' 
          value={values.email}
          onChange={handleChange}
          className="basic_imput"
      
          />
    <span className="error_message">{errors.email && touched.email && errors.email}</span>
    

     <button type="submit" className='next_step_button'>Next step{ArrowRigth}</button>
</form> 

)}
     </Formik>

     
    <Link href="SecondPage">ey</Link>
      </section>
    </main>
  )
}
