import React from 'react'
import Navbar from '../components/Navbar'
import Aboutsection from '../components/Aboutsection'

const Page = () => {
  return (
    <div className='bg-[#181818]'>
        <Navbar/>
        <div className='mt-20'>
        <Aboutsection/>
            </div>
    </div>
  )
}

export default Page