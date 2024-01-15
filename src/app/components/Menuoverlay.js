import React from 'react'
import Navlink from './Navlink'

const Menuoverlay = ({links}) => {
  return (
    <ul className='flex flex-col items-center '>
        {
            links.map((links,index)=><li key={index}><Navlink href={links.href} title={links.title}/></li>)
        }
    </ul>
  )
}

export default Menuoverlay