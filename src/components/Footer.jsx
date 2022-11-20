import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <p className="mb-4 flex justify-center text-center">Thanks for visiting my site. I will have more projects uploaded really soon.
        Down below are a few ways of connecting with me.</p>
        <ul className='flex items-center justify-around text-xl pb-6'>
            <li>
                <a href={"https://twitter.com/jcyber101"} target="_blank">
                    <FaTwitter />
                </a>
                
            </li>
            <li>
                <a href={"https://www.youtube.com/channel/UCy36La8kuCxBO1P_fbusY8Q"} target="_blank">
                    <FaYoutube />
                </a>
                
            </li>
            <li>
                <a href={"https://github.com/jcovington16"} target="_blank">
                    <FaGithub />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer;