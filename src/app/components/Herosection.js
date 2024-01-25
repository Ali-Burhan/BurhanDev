'use client'
import Image from "next/image"
import {TypeAnimation} from 'react-type-animation'

const Herosection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className=" col-span-7 place-self-center text-center sm:text-left">
        <h1 className='font-mono text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
<div className="font-mono text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-blue-300">Hello, I&apos;m {" "}</div>

<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ali Burhan',
        1000, // wait 1s before replacing"
        'Web Developer',
        1000,
        'Data Scientist',
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '0.6em', display: 'inline-block' }}
      repeat={5}
    />
    
      </h1>
      <p className="text-[#ADB7BE] font-mono sm:text-lg lg:text-xl mb-6 ">
      As a full stack web developer and programmer, I am passionate about
            crafting robust and user-friendly applications. With expertise in
            front-end and back-end technologies, I strive to deliver seamless
            user experiences.
      </p>
      <div>
        <button className="px-6 py-3 font-mono font-bold rounded-full w-full mr-4 bg-gradient-to-br from-yellow-600 via-yellow-300 to-yellow-100 hover:bg-slate-300 mb-3 ">Hire Me</button>
        <button className="px-1 py-1 font-mono font-bold rounded-full bg-gradient-to-br from-yellow-600 via-yellow-300 to-yellow-100 w-full sm:w-fit hover:bg-slate-800  text-white"> <span className="block bg-[#181818] hover:bg-yellow-500 rounded-full px-5 py-2"> <a download={true} href={'/ali.jpg'}> Download CV </a></span></button>
      </div>
            </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-8">
<div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
            className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={'/ali.jpg'}
            alt="hero img"
            height={500}
            width={500}
            />
            </div>
        </div>
        </div>
        </section>
  )
}

export default Herosection