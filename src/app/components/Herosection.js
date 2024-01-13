import Image from "next/image"
const Herosection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className=" col-span-7 place-self-center text-center sm:text-left">
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
<div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {" "}</div>
Ali Burhan
      </h1>
      <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 ">
        aksjhd asdjkh asdjkhasd asdjhjksd jkashd
      </p>
      <div>
        <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 mb-3 ">Hire Me</button>
        <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit hover:bg-slate-800  text-white"> <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV</span></button>
      </div>
            </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-8">
<div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
            className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={'/heroimg1.png'}
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