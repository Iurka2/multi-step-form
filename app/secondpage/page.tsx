'use client';

import { Formik} from 'formik';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { validationSchema } from '../validation';
import { UserContext } from '../userContext';
import React from 'react';
import { useRouter } from 'next/navigation';



export default function Secondpage() {
  // access user and setUser from context
  const { user, setUser } = React.useContext(UserContext); 
  
  // create a router instance
  const router = useRouter();  
  return (
    <main>
      <section className='middle_section'>
       <h1 className='heading'>Where can we find you ?</h1>
        <h2 className='sub_heading'>Please provide your adress,country,city and zip code.</h2>
<Formik
       initialValues={user}
       validationSchema={validationSchema.location}
       onSubmit={ async (values) => {
        console.log(values)
        setUser(values);
        router.push('/summary');
        }}>


       {({
        values,
         errors,
         touched,
         handleChange,
         handleSubmit,
      }) => (

<form className="form_container" onSubmit={handleSubmit}>

    <label className='basic_lable' >Country</label>
      <input 
        type="country" 
        name='country' 
        value={values.country}
        onChange={handleChange}
        className="basic_imput" 
      
        />
      <span className="error_message">{errors.country && touched.country && errors.country }</span>
    
      <label className='basic_lable'>City</label>
        <input 
          type="tel" 
          name='city' 
          value={values.city}
          onChange={handleChange}
          className="basic_imput"      
      
          />
    <span className="error_message">{errors.city && touched.city && errors.city}</span>
    
    
    <label className='basic_lable'>ZIP</label>
        <input 
          type="text"  
          name='zip' 
          value={values.zip}
          onChange={handleChange}
          className="basic_imput"
      
          />
    <span className="error_message">{errors.zip && touched.zip && errors.zip}</span>


    <label className='basic_lable'>Address</label>
        <input 
          type="text"  
          name='address' 
          value={values.address}
          onChange={handleChange}
          className="basic_imput"
      
          />
    <span className="error_message">{errors.address && touched.address && errors.address}</span>
    

    <button onClick={()=>{router.push('/');}} className='go_back_button'><FiArrowLeft className="arrows" />Go back</button>
    <button type="submit" className='next_step_button'>Next step<FiArrowRight className="arrows" /></button>
</form> 

)}
     </Formik>
      </section>
    </main>
  )
}


