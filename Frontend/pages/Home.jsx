import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen flex pt-8  justify-between flex-col w-full ">
            <img className='w-15 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 mt-4 rounded-md'>Continue</Link>
            </div>
      </div>
    </div>
  )
}

export default Home
