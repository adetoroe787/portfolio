import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Contact() {
    return (
        <div className='mx-w-lg w-full text-center pt-36 pb-10'>
            <h1 className='text-2xl sm:text-4xl'>Interest In Working With Me?</h1>
            <a href='mailto:adetoroe787@mail.com'>
                <span className='mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
                    <div className='flex flex-row item-center'>
                        <span className='mr-3'>Get in Touch</span>
                        <FaArrowRight color='white'/>
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Contact