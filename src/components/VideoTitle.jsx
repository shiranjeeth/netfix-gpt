import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
   <>
   <div className='pt-48 px-12'>
   <h1 className='text-6xl font-bold'>{title}</h1>
   <p className='py-6 text-lg w-1/4'>{description}</p>
   <div>
    <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>Play</button>
    <button className='mx-3 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg' >More info</button>
   </div>
   </div>
   </>
  )
}

export default VideoTitle