import React, { useContext } from 'react'
import { Content } from '../context/Content'

const Menu = () => {
    const { menu } = useContext(Content)
    let menuDistance = 0
    menu ? menuDistance = 0 : menuDistance = "-200px"
  return (
    <div className='z-10 fixed top-[73px]  text-[white] text-md' style={{left: menuDistance , transition: 'all 0.5s ease'}}>
      <div className='p-4 m-2 bg-[rgba(0,0,0,0.6)] w-[200px] flex flex-col justify-center items-center rounded-3xl'>
        <ul>
            <li><p className='cursor-pointer'>Genres</p></li>
            <li><p className='cursor-pointer'>Types</p></li>
            <li><p className='cursor-pointer'>Updated</p></li>
            <li><p className='cursor-pointer'>Added</p></li>
            <li><p className='cursor-pointer'>Ongoing</p></li>
            <li><p className='cursor-pointer'>Upcoming</p></li>
            <li><p className='cursor-pointer'>Random</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu