import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white p-4 fixed w-full top-0 z-50'>
        <ul className='flex justify-center space-x-10 text-xl'>
            <li>
                <a className='hover:text-blue-400' href="#home">Home</a>
            </li>
            <li>
                <a className='hover:text-blue-400' href="#skills">Skills</a>
            </li>
            <li>
                <a className='hover:text-blue-400' href="#experience">Experience</a>
            </li>
            <li>
                <a className='hover:text-blue-400' href="#projects">Projects</a>
            </li>
            <li>
                <a className='hover:text-blue-400' href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar