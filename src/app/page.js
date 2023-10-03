import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Book from './components/Book'
import Footer from './components/Footer'
import ChefsMsg from './components/ChefsMsg'


export default function Home() {
  return (
    <main>
<div className="bg-[url('/devran-images/foodbackdrop.png')] bg-cover bg-center h-screen ">
      <Navbar />

      <Hero />
      </div>

      <ChefsMsg />

      <div className="bg-[url('/devran-images/foodbackdrop.png')] bg-cover " id="book">
      <Book />
      </div>
      <div id="footer">
      <Footer />
      </div>
    </main>
  )
}
