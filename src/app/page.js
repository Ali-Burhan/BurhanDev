import Aboutsection from './components/Aboutsection'
import Emailsection from './components/Emailsection'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Projectsection from './components/Projectsection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto md:px-12 md:py-4'>
      <div className=' mt-24 container mx-auto px-3 py-3 md:px-12 md:py-4'>
      <Herosection/>
      <div>
      <Aboutsection/>
      </div>
      <hr/>
      <div className='mt-4'>
        <h2 className='text-white text-4xl font-bold text-center mb-6'>My Projects</h2>
      <Projectsection/>
      </div>
      <hr/>
      <Emailsection/>
      </div>
    </main>
  )
}
