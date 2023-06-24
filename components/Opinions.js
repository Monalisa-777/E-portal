import React from 'react'

const Opinions = () => {
  return (

    <div className='h-full w-full text-5xl bg-white text-black mx-2 '>
        <h1 className='font-serif bg-white text-black border border-b-black mx-5'><i>Opinions</i></h1>
    <div className=" grid lg:grid-cols-3 grid-cols-2 gap-6 mx-2 mt-4  ">

    <div className="bg-white h-[40%] mx-2 ">
      <img src="https://d.newsweek.com/en/full/2249767/joe-biden-sworn.webp?w=790&f=a476ec01d8d437570e1a766057375ade" alt="Card 1 Image" class="w-full h-60"/>
      <div className="p-6">
        <p className="text-gray-600 text-xl font-serif"><b><i>"Don't Let Hunter's Plea Deal Distract From The Real Biden Problem":Ukraine.</i></b></p>
        <div className="w-full h-full pt-4 bg-white flex">

        <div className='w-[20%] h-[9%] '>
        <img src="https://th.bing.com/th/id/OIP.xnXtsf_3n69a4lbWVHiqmAAAAA?pid=ImgDet&rs=" alt="user"className='h-full w-full' />
        </div>

     <div className="ml-2 text-sm mt-2 text-red-600">
          <h5>-John Hammer</h5>
        </div>
      </div>
    </div>
    </div>


    <div className="bg-white h-[60%]">     
      <div className="p-6">
        <p className="text-gray-600 text-xl font-serif"><b><i>"The India-US defence compact is an attempt to ensure respect for the sovereignty and territorial integrity of all states in the region".</i></b></p>
        <div className="w-full h-full pt-4 bg-white flex">
         <div className="ml-2 text-sm mt-2 text-red-600">
          <h5>-C.Raja Mohan</h5>
        </div>
        </div>
        </div>

      <img src="https://images.indianexpress.com/2023/06/Modi-Biden-10.jpg?resize=450,250" alt="Card 3 Image" className='w-full h-[80%]' /> 
      
      </div>


    <div className="bg-white h-[60%] mx-2">
      <img src="https://www.hindustantimes.com/ht-img/img/2023/06/20/550x309/air_india_1687272771271_1687272771486.jpg" alt="Card 2 Image" class="w-full h-[70%]"/>
      <div className="p-6">
        <p className="text-gray-600 text-xl font-serif"><b><i>"Happy to share that we have signed purchase agreements with @Airbus & @BoeingAirplanes today to add 470 new aircraft to enhance our fleet strength!"</i></b></p>
        <div className="w-full h-full pt-4 bg-white flex">

        <div className=" text-sm mt-1 text-red-600">
          <h5>-Air India</h5>
        </div>

        <div className='w-[20%] ml-[65%] h-[9%]'>
        <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" alt="user"
        className='h-full w-full '/>
        </div>

      </div>
    </div>
  </div>



   </div>




    
    </div>
  )
}

export default Opinions
