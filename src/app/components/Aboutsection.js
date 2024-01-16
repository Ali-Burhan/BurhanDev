'use client'
import Image from "next/image";
import { useState, useTransition } from "react";
import Tabbuttons from "./Tabbuttons";

const TAB_DATA = [
  {
    title:'Skills',
    id:'Skills',
    content:(
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    )
  },
  {
    title:'Educations',
    id:'Educations',
    content:(
      <ul>
        <li>BSCS (HONS)</li>
        <li>NFC IE&FR</li>
      </ul>
    )
  },
  {
    title:'Certifications',
    id:'Certifications',
    content:(
      <ul>
        <li>Node.js</li>
      </ul>
    )
  },
]


const Aboutsection = () => {
  const [tab,setTab] = useState('Skills')
  const [isPending,startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(()=>{
      setTab(id)
    })
  }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="">
          <Image src={"/about.png"} height={500} width={500} />
        </div>
        <div>
          <h2 className="text-4xl font-bold  mb-4 underline">About Me</h2>
          <p className="text-base md:text-lg ">
            As a full stack web developer and programmer, I am passionate about
            crafting robust and user-friendly applications. With expertise in
            front-end and back-end technologies, I strive to deliver seamless
            user experiences. I enjoy tackling complex challenges, continuously
            learning and implementing cutting-edge technologies to create
            innovative and scalable solutions. My goal is to contribute to the
            development of impactful and efficient web applications that make a
            positive impact in the digital world.
          </p>
          <div className="flex justify-start flex-row mt-6">
            <Tabbuttons selectTab={()=>handleTabChange('Skills')} active={tab == 'Skills'}>
              Skills
            </Tabbuttons>
            <Tabbuttons selectTab={()=>handleTabChange('Educations')} active={tab == 'Educations'}>
              Educations
            </Tabbuttons>
            <Tabbuttons selectTab={()=>handleTabChange('Certifications')} active={tab == 'Certifications'}>
              Certifications
            </Tabbuttons>
          </div>
          <div className="mt-8 ">
              {
                TAB_DATA.find((t)=> t.id === tab).content
              }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
