'use client'
import React, { useState } from 'react'
import Projectcard from './Projectcard'
import Projecttag from './Projecttag'

const projectData = [
    {
        id:1,
        title:'React Portfolio',
        description:'My portfolio website builded in react javascript framework. ',
        img:'/project/portfolio.jpg',
        tag:["All","Web"],
        gitUrl:'https://github.com/Ali-Burhan/reactportfolio',
        previewUrl:'https://codewithbaan.vercel.app/'
    },
    {
        id:2,
        title:'Accoutning Web App',
        description:'A full stack Accounting Solution web based builded in react and SQL server.',
        img:'/project/accounting.jpg',
        tag:["All","Web"],
        gitUrl:'',
        previewUrl:''
    },
    {
        id:3,
        title:'Admin Panel Ui',
        description:'Frontend dashboard for admins builded in React only one page.',
        img:'/project/admin.jpg',
        tag:["All"],
        gitUrl:'https://github.com/Ali-Burhan/adminpanel',
        previewUrl:'adminpanel-gray.vercel.app'
    },
    {
        id:4,
        title:'Simple Blog Website',
        description:'React based full stack blog website for bloging.',
        img:'/project/bloging.avif',
        tag:["All","Web"],
        gitUrl:'https://github.com/Ali-Burhan/reactBlog',
        previewUrl:''
    },
]



const Projectsection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (id) => {
        setTag(id)
    }
    const filterProject = projectData.filter(project=>project.tag.includes(tag))
  return (
    <>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <Projecttag onClick={handleTagChange} name={"All"} isSeleced={tag == "All"}/>
        <Projecttag onClick={handleTagChange} name={"Web"} isSeleced={tag == "Web"}/>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {
        filterProject.map((ele,index)=>(
            <Projectcard title={ele.title} gitUrl={ele.gitUrl} previewUrl={ele.previewUrl} description={ele.description} key={index} imgURL={ele.img}/>
        ))
    }
    </div>
    </>
  )
}

export default Projectsection