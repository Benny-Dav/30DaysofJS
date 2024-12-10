import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <section className='h-[100vh] bg-orange-200 flex flex-col pt-[10%]'>
        <h1 className='mb-12 text-6xl font-extrabold italic w-[60%] text-center text-rose-500 animate-pulse ml-auto mr-auto'>Welcome to 30 Days of Javascript with Benny</h1>
        <p className='text-3xl w-[70%] text-center ml-auto mr-auto'>Simple Javascript tutorials for beginners, but this time with practical examples and fun UI.</p>
        <Link to="/tutorials" className='flex justify-center items-center'>
        <button className='w-[30%] px-8 py-4 ml-auto mr-auto rounded-2xl bg-rose-500 text-white text-2xl mt-10 font-bold'>Get Started</button></Link>
    </section>
  )
}

export default HomePage