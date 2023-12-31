import React, { useContext, useState } from 'react'
import { Button, Card, Checkbox, Label, RangeSlider, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
  const [errors, setErrors] = useState(null);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    // validation
    if (password.length < 6) {
      setErrors("password must be 6 character");
      return;
    }
    else if (!(/[A-Z]/.test(password))) {
      setErrors("password must have a uppercase!");
      return;
    }
    else if (!(/[!@#$%^&*()+=-\?]/.test(password))) {
      setErrors("password should have at least one special character(@,& etc)");
      return;
    }

    setErrors("");


    createUser(email, password)
      .then(result => {
        if(result.user){
          navigate(location?.state ? location?.state : "/")
          toast.success("Successfully Registration!")
        }
      })
      .catch((err)=>{
        if(err){
          toast.error(`Already exist ${email}`)
        }
      })
      



  }





  return (
    <div className='mt-16'>
      <div className='container mx-auto px-4'>
        <Card className='md:w-[50%]
         m-auto bg-white shadow-none'>
          <h2 className='text-3xl font-semibold mb-5'>Registration here</h2>
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email1"
                placeholder="name@gmail.com"
                required
                type="email"
                name="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password1"
                required
                type="password"
                name="password"
              />
              <p className='text-red-600 mt-2'>{errors}</p>
            </div>

            <button className='bg-black text-white py-2' type="submit">
              Register
            </button>
          </form>
          <p className='text-red-600 mt-2'></p>
          <div>
            <p>Already have an account? <Link to='/login' className='text-green-400 underline'>Login here</Link> </p>

          </div>
        </Card>
      </div>
    </div>
  )
}

export default Register