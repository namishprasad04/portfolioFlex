import { useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-950 py-4 fixed z-30 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold p-2 ml-2">PortfolioFlex</h1>
          <div className="block lg:hidden transition duration-300 mr-5" onClick={toggleMenu}>
            {isOpen ? <IoCloseSharp size={30} color="white" /> : <HiOutlineMenu size={30} color="white"  />}
          </div>
        
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-white">
              <li className="hover:underline" ><a href="#home" >Home</a></li>
              <li className="hover:underline" ><a href="#about" >About</a></li>
              <li className="hover:underline" ><a href="#offer" >Services</a></li>
              <li className="hover:underline" ><a href="#contact" >Contact Us</a></li>
            </ul>
          </nav>
        </div>
          {
            isOpen && (
            <nav className="h-screen w-full mt-5 bg-gradient-to-b from-gray-800 to-black transition duration-300">
              <ul className="h-[700px] text-white flex flex-col justify-center items-center gap-5">
                <li className="hover:underline p-2 font-semibold text-gray-500 text-xl" onClick={toggleMenu}><a href="#home">Home</a></li>
                <li className="hover:underline p-2 font-semibold text-gray-500 text-xl" onClick={toggleMenu}><a href="#about">About Us</a></li>
                <li className="hover:underline p-2 font-semibold text-gray-500 text-xl" onClick={toggleMenu}><a href="#offer">Services</a></li>
                <li className="hover:underline p-2 font-semibold text-gray-500 text-xl" onClick={toggleMenu}><a href="#contact">Contact Us</a></li>
              </ul>
            </nav>
            )
          }
      </header>
  )
}
