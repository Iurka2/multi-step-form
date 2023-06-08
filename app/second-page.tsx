'use client';

import { Formik} from 'formik';
import * as Yup from 'yup';


export default function SecondPage() {


  const ArrowRigth = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='arrows_left' ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>

  const SignupSchema = Yup.object().shape({
    country: Yup.string()
    .required("Country required"),

	  address: Yup.string()
      .required("Address Required"),

    city: Yup.string()
    .required("City Required"),
    
    zip: Yup.string()
    .required("Zip code requred")
    .matches(/^(\+?\d{4,})$/, "Invalid zip code"),
    
  });


  return (
    <main>
      <section className='middle_section'>
       <h1 className='heading'>Where can we find you ?</h1>
        <h2 className='sub_heading'>Please provide your adress,country,city and zip code.</h2>
<Formik
       initialValues={{ country: '', city: "", zip: "", address: ""}}
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

    <label className='basic_lable' >Country</label>
      <input 
        type="text" 
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
    

    <button type="submit" className='next_step_button'>Go back{ArrowRigth}</button>
    <button type="submit" className='next_step_button'>Next step{ArrowRigth}</button>
</form> 

)}
     </Formik>
      </section>
    </main>
  )
}
