'use client'
import Link from 'next/link'
import Navlink from './Navlink'
import { useState } from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Menuoverlay from './Menuoverlay'
import Image from 'next/image'

const NavLinks = [
  {
    title:'About',
    href:'/About'
  },
  {
    title:'Projects',
    href:'/Projects'
  },
  {
    title:'Contact',
    href:'/contact'
  }
]

const Navbar = () => {
  const [navbarOpen,setNavbarOpen] = useState(false)
  return (
<nav className='fixed top-0 left-0 z-10 bg-[#121212] bg-opacity-100 container'>
    <div className='flex flex-wrap items-center justify-between mx-auto p-4 '>
    <Link href={'/'} className='sm:text-xl flex gap-3 items-center text-white font-semibold'>
      <Image src={'/logo.png'} width={45} height={45}/>
      BurhanDev
    </Link>
    <div className='mobilemenu block md:hidden'>
{
!navbarOpen?<button onClick={()=>setNavbarOpen(true)} className='border border-white rounded px-3 py-2'><Bars3Icon className='h-5 text-white w-5'/></button>:<button onClick={()=>setNavbarOpen(false)} className='border border-white rounded px-3 py-2'><XMarkIcon className='h-5 w-5 text-white'/></button>
}
    </div>
    <div className='menu hidden md:block md:w-auto ' id='navbar'>
      <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
   {
    NavLinks.map((e,index)=><li key={index}><Navlink title={e.title} href={e.href} /></li>)
   }
      </ul>
    </div>
    </div>
    {navbarOpen?<Menuoverlay links={NavLinks}/>:null}
</nav>
  )
}

export default Navbar