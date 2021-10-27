import React from 'react'
import Social from './Social'

function Footer() {
    return (
        <div className='py-5 border-t-3/2'>
            <Social />
            <div className='flex justify-center mt-4'>
                <p className='text-black mb-4'>Made with <span className='mr-2' role='link' aria-label='heart'>💙</span> by <a className='text-blue-500 hover:underline' href='mailto:adetoroe787@gmail.com'>Ezekiel Adetoro</a></p>
            </div>
            
        </div>
    )
}

export default Footer