import React from 'react'

const Footer = () => {
  return (
    <div className='m-12'>
        <div className='text-xl border-b-2 border-slate-400 p-3'>
            <p>Sports</p>
        </div>
        <div className='text-xl text-center border-b-2 border-slate-400 p-3'>
            <p>Lifestyle</p>
        </div>
        <div className='text-xl text-end border-b-2 border-slate-400 p-3'>
            <p>Videos</p>
        </div>
        <div className='text-xl text-center border-b-2 border-slate-400 p-3'>
            <p>Explore</p>
        </div>
        <div className='text-xl  border-b-2 border-slate-400 p-3'>
            <p>Most Viewed</p>
        </div>
        <div className='text-xl text-center border-b-2 border-slate-400 p-3'>
            <p>In Pictures</p>
        </div>
        <div>
            <input type='email' placeholder='Enter you Email-id'  className='text-xl text-center border-y-2 m-3 border-slate-400 p-1 w-1/2' />
            <button className='border-2 border-black p-1 pl-4 pr-4 rounded-3xl bg-sky-600 text-white hover:bg-sky-800'>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer