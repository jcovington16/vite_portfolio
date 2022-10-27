import React from 'react'

function Intro() {
  return (
    <section id="intro" className="flex items-center justify-center flex-col pt-20 pb-6">
        <img src='astro.jpg' alt="astro" className='object-left-top'/>
        <div className="text-center">

            <h1 className="text-4xl md:text-7xl dark:text-black mb-1 md:mb-3 font-bold">
                Astro Dev
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'>
                Software Engineer{' '}
            </p>
            <p className='text-sm max-w-xl mb-6 font-bold'>

            </p>
        </div>
    </section>
  )
}

export default Intro;