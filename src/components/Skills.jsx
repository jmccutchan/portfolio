import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='p-10 text-center'>
        <h2 className='text-3xl font-bold'>
            Skills
        </h2>
        <div className='mt-4 flex text-black flex-wrap justify-center gap-4'>
            <span className='px-4 py-2 bg-gray-200 rounded'>React</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Next.js</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>PHP</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Express</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Node.js</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>MongoDB</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Electron</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Tailwind</span>
            <span className='px-4 py-2 bg-gray-200 rounded'>Flutter</span>
        </div>
    </section>
  )
}

export default Skills