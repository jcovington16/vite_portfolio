import React from 'react';

function Intro() {
  return (
    <section id="intro" className="flex items-center justify-center flex-col pt-20 pb-6">
        <img src='astro.jpg' alt="astro" className='max-w-xs h-auto'/>
        <div className="text-center">
            <p className='text-base md:text-xl mb-3 font-medium'>
                Software Engineer{' '}
            </p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                Hello, My name is Joshua Covington and I'm a software engineer based out of Denver,
                Colorado. I'm passionate about my work and also improving my existing skills. I enjoy
                contributing to projects, working in groups, and always being a team player. I'm 
                working on advertising myself more, so please check out my{' '}
                <a href="https://github.com/jcovington16" target="_blank" className="text-blue-400
                hover:underline-offset-2 decoration-2 decoration-red-600">GitHub</a>.
            </p>
        </div>
    </section>
  )
}

export default Intro;