import React from 'react'
import { fetchPhotos, fetchVids } from './api/mediaApi'

const App = () => {

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='space-x-5'>
      <button className='bg-amber-500 cursor-pointer px-4 py-2 rounded-lg border border-gray-200' onClick={async () => {
       const data = await fetchPhotos("Cat")
        console.log(data.results)
      }}>Get Photos</button>

      <button className='bg-amber-500 cursor-pointer px-4 py-2 rounded-lg border border-gray-200' onClick={async () => {
       const data = await fetchVids("Humans")
       console.log(data.videos)
      }}>Get Videos</button>
      </div>
    </div>
  )
}

export default App