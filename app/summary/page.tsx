'use client';

import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { UserContext } from '../userContext';
import React from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
export default function Secondpage() {


 // create a router instance
  const router = useRouter();

// Define a function that triggers a success toast message upon user confirmation.
  const notify = () => toast.success('Information confirmed !');
  
  // Grab 'user' data from our shared UserContext using the useContext Hook.
  const { user } = React.useContext(UserContext);

  return (
    <main>
      <section className='middle_section'>
       <h1 className='heading'>Summary</h1>
        <h2 className='sub_heading'>Please be sure you provided the right information</h2>

         <section className='innter_middle_section' >
          <ul>
           <li><span className='summary_text'>Name: </span>{user.name} </li>
           <li><span className='summary_text'>Mail: </span>{user.email}</li>
           <li><span className='summary_text'>Phone:</span> {user.phone} </li>
          </ul>
          <ul>
           <li><span className='summary_text'>Country:</span> {user.country}</li>
           <li><span className='summary_text'>City:</span> {user.city}</li>
           <li><span className='summary_text'>Zip:</span> {user.zip}</li>
          </ul>
          <ul>
           <li><span className='summary_text'>Adress:</span> {user.address} </li>
          </ul>
         </section>


        <button onClick={()=>{router.push('/secondpage');}} className='go_back_button'><FiArrowLeft className="arrows" />Go back</button>
        <button  onClick={notify} style={{color:"#73D673"}} className='next_step_button'>Submit<FiArrowRight className="arrows" /></button>
        <Toaster />
      </section>
    </main>
  )
}
