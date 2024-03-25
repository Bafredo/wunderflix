import React ,{ useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { Content } from '../context/Content'

const Navbar = () => {
  const navigate = useNavigate()
  const {menu, toggleMenu} = useContext(Content)
  return (
    <div className=' z-10 flex fixed w-full top-0 justify-between bg-black text-white p-4 h-20 items-center'>
        {menu === false ?
          <div onClick={()=>{
            if(menu === true){
              toggleMenu()
            }else{
              toggleMenu()
            }
            console.log(menu)
          }} className='basis-1/14'>
          <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
          </div>
          :
          <div onClick={()=>{
            if(menu === true){
              toggleMenu()
            }else{
              toggleMenu()
            }
            console.log(menu)
          }} className='basis-1/14'>
          <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
          </svg>

          </div>
        }
        <h1 className='text-xl font-bold basis-2/14 cursor-pointer justify-start' onClick={() => { navigate('/') }}>WunderFlix</h1>
        <form className='mx-1 bg-gray-900 p-2 basis-9/14 w-[50%] flex align-center justify-center rounded-[10px]' >
            <input className='outline-none bg-gray-800 w-full px-4 rounded-[10px]' type='text' placeholder='Search anime'/>
            <button className='mx-1 border-stone-500 border-double px-1'>Filter</button>
        </form>

        <div className='basis-2/14 flex justify-end'>
        <button onClick={() => { navigate('/Login')}} className='bg-blue-900 hover:bg-blue-700 text-white text-sm text-center px-2 py-2 rounded-xl'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar