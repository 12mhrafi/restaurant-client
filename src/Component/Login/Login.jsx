import React, { useContext, useState } from 'react'
import { Button, Card, Checkbox, Label, RangeSlider, TextInput } from 'flowbite-react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
const Login = () => {
  const [error, setError] = useState(null)
  const { loginUser, googleLogin, facebookLogin } = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const handlefacebook = () => {
    facebookLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Login Success");
        }
        navigate(location?.state ? location?.state : "/")

      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Login Success!")
        }
        navigate(location?.state ? location?.state : "/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Login Successful!")
        }
        navigate(location?.state ? location?.state : "/")
      })
      .catch((err) => {
        if (err) {
          setError(err.message);
        }
      })
  }

  return (
    <div className='mt-32'>
      <div className='container mx-auto px-4'>
        <Card className='md:w-[50%]
         m-auto shadow-none'>
          <h2 className='text-3xl font-semibold mb-5'>Login here</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
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
            </div>

            <button type="submit" className='bg-black text-white py-2'>
              Login
            </button>
          </form>
          <p className='text-red-600 mt-2'>{error}</p>
          <div>
            <p>Don't have an account? <Link to='/register' className='text-green-400 underline'>Register here</Link> </p>
            <p className='flex justify-center   mt-5 font-semibold'>or continue with</p>
            <div className='md:flex gap-4 mt-5'>
              <button className='bg-[#d62d20] flex items-center justify-center gap-2 w-full  md:w-[50%] py-2 text-white' onClick={handleGoogle}>  <FaGoogle></FaGoogle> google</button>
              <button className='bg-[#1877F2] flex items-center justify-center gap-2 w-full md:mt-0 mt-5 md:w-[50%] py-2 text-white' onClick={handlefacebook}> <FaFacebook></FaFacebook>   facebook</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login