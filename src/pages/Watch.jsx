import React , { useContext }from 'react'
import { Content } from '../context/Content'

const Watch = () => {
    const { show } = useContext(Content)
  return (
    <div className='mt-20 w-full h-screen bg-[rgba(7,0,23,1)]'>
        <div className='w-full'>
            <iframe className='w-full h-[340px]' src={show?.embed_url} frameborder="0" autoplay>

            </iframe>
        </div>
        <div className='w-full h-fit bg-[rgba(7,0,23,1)]'>
            <p className='mt-5 text-white text-center text-xl font-semibold'>{show?.title}</p>
            <p className='mt-1 text-white text-center text-sm'>Episode: {show?.episode}</p>
        </div>
    </div>
  )
}

export default Watch