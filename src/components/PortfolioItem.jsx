import React from 'react'

function PortfolioItem({workUrl, imgUrl, title, stack}) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={workUrl} className='border-4 border-stone-900 dark:border-black rounded-md overflow-hidden'>
        <img
            src={imgUrl}
            alt='portfolio'
            className='w-full h-36 md:h-48 object-cover'
            />
        <div className='w-full p-4'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-black'>
                {title}
            </h3>

            <p className="flex flex-wrap gap-2 flex-row items-center dark:text-black justify-start text-xs md:text-sm">
                {stack.map(item => (
                    <span
                        key={item}
                        className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-black rounded-md">
                            {item}
                    </span>
                ))}
            </p>

        </div>

    </a>
  )
}

export default PortfolioItem;