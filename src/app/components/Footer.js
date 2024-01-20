import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border bg-[#181818] border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-6 flex justify-between item-center'>
            <Image 
            src={'/logo.png'}
            width={50}
            height={50}
            />
            <p className='text-yellow-500 hidden md:block font-mono'>All rights reserved.</p>
            <p className='text-yellow-500 font-mono'>codewithaliburhan@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer