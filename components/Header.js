import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='border border-b-black border-b-8 p-3 flex justify-between'>
            <div>Monday</div>
            <select className='border-2'>
                <option>Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
            </select>
            {/* <h1>Language</h1> */}
        </div>
        <div className='grid grid-cols-2 justify-items-end border-b border-b-gray-500 m-5 mb-0'>
            <div>
                <img src='/images/logo.jpg' className='h-20'/>
            </div>
            <div>
                <a href='/'><img src='/images/author-3.jpg' className='rounded-full h-16' /></a>
            </div>
        </div>
        <nav className='flex  justify-evenly text-center p-2'>
            <div>More Sections</div>
            <div>News</div>
            <div>Opinions</div>
            <div>Sport</div>
            <div>Culture</div>
            <div>Lifestyle</div>
        </nav>
    </div>
  )
}

export default Header