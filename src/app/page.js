import Aboutsection from './components/Aboutsection'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4'>
      <Navbar/>
      <div className=' mt-24 container mx-auto px-12 py-4'>
      <Herosection/>
      <Aboutsection/>
      </div>
    </main>
  )
}
