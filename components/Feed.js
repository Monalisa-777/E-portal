import React from 'react'

const Feed = () => {
  return (
    <div>
        <div className='text-4xl text-center font-serif border-y border-y-gray-500 ml-5 mr-5 p-3'>
            <h1>Headlines news</h1>
        </div>
        <div>
            <img src='/images/h-img.jpg' className='w-full pl-12 pr-12 pt-4 quality'/>
        </div>
        <h1 className='h-10 mt-5 text-3xl text-center ml-12'>Sub-Headlines</h1>
        <div className='flex justify-around p-12'>
            <div  className='w-1/2'>
                <a href='/'>
                    <img src='/images/sb-img.jpg'/>
                    <p className='p-3 text-3xl'>Sub-Heading</p>
                </a>
            </div>
            <div className='w-1/2'>
                <a href='/' className='flex p-5 pt-0'>
                    <img src='/images/sb-img.jpg' className='w-2/6 min-w-[25%] mt-0'/>
                    <p>Other News Heading</p>
                </a>
                <a href='/' className='flex p-5 pt-0'>
                    <img src='/images/sb-img.jpg' className='w-2/6 min-w-[25%]'/>
                    <p>Other News Heading</p>
                </a>
                <a href='/' className='flex p-5 pt-0'>
                    <img src='/images/sb-img.jpg' className='w-2/6 min-w-[25%]'/>
                    <p>Other News Heading</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Feed