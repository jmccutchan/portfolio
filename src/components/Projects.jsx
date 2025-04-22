import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id='projects' className='p-10 text-center'>
        <h2 className='text-3xl font-bold'>
            Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <div className='p-4 bg-blue-900 rounded w-full text-white hover:bg-amber-300 hover:text-blue-700'><Link href="https://next-jobs-nu.vercel.app/">Next Jobs</Link></div>
            {/* <div className='p-4 bg-blue-900 rounded'>Project 2</div>
            <div className='p-4 bg-blue-900 rounded'>Project 3</div>
            <div className='p-4 bg-blue-900 rounded'>Project 4</div> */}
        </div>
    </section>
  )
}

export default Projects