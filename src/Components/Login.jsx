import { useState } from 'react'
import { useForm } from "react-hook-form"
import './Login.css'
import { Phone } from 'lucide-react';
import { BiColorFill } from 'react-icons/bi';

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors ,isSubmitting},
  } = useForm();
  
  const delay=(d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async (data) =>{
    let r = await fetch("http://localhost:3000/" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    let res = await r.text()
    console.log(data,res)
  } 
    return (
    <> <div className="background">
    <div className="header">
      <h2 className="h2">ChatSecure</h2>
      <button> <Phone size={16} className='Phone'/> Contact Us</button>
    </div>
    {isSubmitting && <div>Loading...</div>}
     <div className='container'>
      <div className="Welcome-msg">
        <h3>Hi, Welcome back</h3>
        <p>Enter your email and password to sign in </p>
      </div>
      <form className="inputs " action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='email' {...register("username" , {required:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Enter a valid email address"}   })} type='text'  />
        {errors.username && <div className='red'>{errors.username.message} </div>}
        <input placeholder='password' {...register("password" ,{required:{value : true , message :"This field is required"} , minLength : { value : 3 , message : " Min required Length is three"} })} type='password' />
        <p className='F-P'>Forget password?</p>
        <input disabled={isSubmitting} type="submit" value="Login" />
        <p>Not registered yet? <span>Create an account</span></p>
        {errors.myForm && <div className='red'> {errors.myForm.message}</div>}
        {errors.Blocked && <div className='red'> {errors.Blocked.message}</div>}
      </form>
     </div>
     </div>
    </>
  )
}

export default Login;
