import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName : firstName,
        lastName : lastName,
      },
      email : email,
      password : password
    })
    console.log(userData)
    setEmail("")
    setPassword("")
    setFirstName("")
    setLastName("")
  }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)}>

        <h3 className="text-lg font-medium mb-2">What`s your name</h3>
        <div className='flex gap-4 mb-5'>
        <input
            className="bg-[#eeeeee]  rounded   px-4 py-2  w-1/2  text-lg placeholder:text-base"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
          />
           <input
            className="bg-[#eeeeee]  rounded  px-4 py-2  w-1/2  text-lg placeholder:text-base"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />

        </div>

            <h3 className="text-lg font-medium mb-2">What`s your email</h3>
          <input
            className="bg-[#eeeeee]  rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
            <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2  w-full text-lg placeholder:text-base"
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
          />
          <button
            className="bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
             Sign up
          </button>
        </form>
        <p className="text-center">
          Already have an account?  {" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p>By proceeding, you agree to our <span className='text-blue-600'>Terms of Service</span> and <span className='text-blue-600'>Privacy Policy</span></p>
      </div>
    </div>
    </div>
  )
}

export default CaptainSignup
