'use client';

import { Formik} from 'formik';
import { FiArrowRight } from "react-icons/fi";
import { validationSchema } from './validation';
import React from "react"
import { UserContext } from './userContext';
import { useRouter } from 'next/navigation';



export default function Home() {

// access user and setUser from context
  const { user, setUser } = React.useContext(UserContext); 

// create a router instance
  const router = useRouter(); 




  return (
    <main>
      <section className='middle_section'>
       <h1 className='heading'>Personal Information</h1>
        <h2 className='sub_heading'>Please provide your name,email adress,and phone number.</h2>
<Formik
       initialValues={user}
       validationSchema={validationSchema.personal}
       onSubmit={ async (values) => {
        console.log(values)
        setUser(values);
        router.push('/secondpage');
        }}>


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
    
      <label className='basic_lable'>Phone</label>
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
    

     <button type="submit" className='next_step_button'>Next step<FiArrowRight className="arrows" /></button>
</form> 

)}
     </Formik>

     
    
      </section>
    </main>
  )
}


