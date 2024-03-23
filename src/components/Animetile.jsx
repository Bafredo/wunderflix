import React  from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Content } from '../context/Content'

const Animetile = (props) => {
  const { setShow } = useContext(Content)
  const navigate = useNavigate()
    const anime = props.anime
  return (
    <div onClick={() => {navigate("/Watch") ; setShow(anime)}} className='relative m-1 text-white bg-[rgba(7,0,23,1)]'>
        <div className='w-100 h-100 flex flex-col items-center justify-center'>
        {/* <img className='w-100 h-100 bg-' src={anime.thumbnail} alt="" /> */}
        <div className='w-[100%] h-[200px] flex flex-col items-bottom justify-center' style={{backgroundImage: `url(${anime?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

          <div className='w-full h-[50%]'></div>
          <div className='w-full h-[50%] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(7,0,23,1)]' >

          </div>
        </div>
        
        <div>
        <p className='text-center text-sm text-blue-300'>{anime.title +" "+ anime.year}</p>
        <p className='text-sm text-[aqua] text-center mb-5'>Episode :{anime.episode}</p>
        </div>
        </div>
        <p className='absolute bottom-0 text-[12px] m-1 text-[white] text-center'>{anime.type}</p>
    </div>
  )
}

export default Animetile


{/* <h1>{anime.title}</h1>
        <p>Episode :{anime.episode}</p>
        <p>Genres :{anime.genres}</p>
        <p>Year :{anime.year}</p>
        <p>Type :{anime.type}</p> */}