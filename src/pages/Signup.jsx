import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='overflow-hidden mt-20'>
        <div className='flex bg-[rgba(7,0,23,1)] h-[87vh] w-screen overflow-hidden items-center justify-center'>
        <div className='h-[400px] w-[90%] flex bg-blue-400 rounded-[30px] shadow-md'>
            <div className='basis-1/2 bg-indigo-900 text-white flex flex-col justify-center items-center rounded-l-[30px] rounded-br-[60px] rounded-tr-[90px] '>
                <h1 className='text-3xl text-center font-bold'>Hello!! 👋 and welcome😁</h1>
                <p className='text-center mt-4'>Register and get access to limitless content</p>
                <p className='text-center mt-4 text-[10px]'>Already have an account?</p>
                <button className='mt-1 p-2 bg-white text-indigo-950 rounded-xl w-[90px]' onClick={() => navigate('/login')}>Login</button>
            </div>

            <div className='basis-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold'>Create account</h1>
                
                <form className='mt-1 flex flex-col w-[100%] items-center justify-center'>
                    <div className='flex gap-2 mt-1 mb-2'>
                        <div>
                        <svg className="w-[22px] h-[22px] text-blue-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                        </svg>
                        </div>
                        <div>
                        <svg className="w-[22px] h-[22px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                        </div>
                        <div>
                        <svg className="w-[22px] h-[22px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
                        </svg>
                        </div>
                        <div>
                        <svg className="w-[22px] h-[22px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                        </svg>
                        </div>
                    </div>
                <p className='text-center'>or Sign-up with email</p>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="text" placeholder='First name' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="text" placeholder='Last name' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="email" placeholder='Email' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="password" placeholder='Password' />
                    </div>
                    <div>
                    <input className='outline-none mt-3 p-1 w-[100%] bg-slate-200 rounded-[5px]' type="password" placeholder='Re-type password' />
                    </div>
                    <div>
                    <button className='mt-5 p-2 bg-indigo-900 text-white rounded-xl w-[90px]'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login