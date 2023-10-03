import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestuarantMenu} from 'react-icons/md'
import {logo} from '../assets/devran-logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='mb-2 py-1 backdrop-blur-[0.5rem] font-pacifico '>
        <ul className='flex items-center justify-evenly w-10/12 fixed'>
            <div className='flex items-center justify-evenly w-1/2 '>
            <li>
                <Image src="/devran-images/devran-logo.png" width={70} height={70} alt='logo image' className=" ease-in-out hover:scale-110 duration-200 hover:animate-pulse py-0 my-0" />
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='/menu' >Menu</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='/about' >About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" href='/#footer' >Contact</Link>
            </li>
            </div>
            <li className='nav-item border-2 border-dashed border-orange-200 px-3 py-2'>
            <Link className="nav-link active text-orange-200" href='/#book' >Book Table</Link>
            </li>
            </ul>
    </div>
  )
}

export default Navbar