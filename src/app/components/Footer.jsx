import React from 'react'
import { GiPhone } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { MdHomeWork } from 'react-icons/md'

const Footer = () => {
  return (
    
    <footer
      class="bg-neutral-100 text-center text-orange-200 dark:bg-neutral-600 lg:text-left">
      <div
        class="flex items-center justify-center border-b-2 p-6 dark:border-neutral-500 lg:justify-between">
      

        
      </div>
    
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          


          <div class="">
            <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Links
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-orange-200"
                >Menu</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-orange-200"
                >About</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-orange-200"
                >Contact</a>
            </p>
            <p>
              <a href="#!" class="text-orange-200"
                >Book</a>
            </p>
          </div>


          <div>
            <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <MdHomeWork />
              170-172 Stoke Newington Rd, London, N16 7UY
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <MdEmail />
              info@devranrestaurant.co.uk
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <GiPhone />
              +442072542525
            </p>
            
          </div>
        </div>
      </div>
    
 
      <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a
          class="font-semibold text-neutral-600 dark:text-neutral-400"
          href="/"
          >Devran Restaurant</a>
      </div>
    </footer>

  )
}

export default Footer