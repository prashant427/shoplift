import React from 'react'
import logo from '../assets/logo.jpeg'

function Footer() {
  return (
    <div className='w-full h-2/3 p-8 bg-slate-200 flex gap-2 justify-between items-center'>

    <div id="brand" className='hiden md:flex items-center flex-col gap-2 ' >
        <img className='w-14 h-14 md:w-20 md:h-20 ' src = {logo} alt="logo" />
        <h1 className='brand_name uppercase font-sans text-2xl' >shoplft</h1>
      </div>

    <div id="foot-item" className='w-44 hidden md:block' >
        <h1 className=' uppercase text-lg '>product</h1>
        <ul>
            <li className=' uppercase text-xs'>shirt</li>
            <li className=' uppercase text-xs'>jackets</li>
            <li className=' uppercase text-xs'>hat</li>
            <li className=' uppercase text-xs'>jogger   </li>
        </ul>


    </div>
    
    <div id="foot-item" className='w-44 hidden md:block' >
        <h1 className=' uppercase text-lg '>buying</h1>
        <ul>
            <li className=' uppercase text-xs'>shop</li>
            <li className=' uppercase text-xs'>term to use</li>
            <li className=' uppercase text-xs'>privacy</li>
            <li className=' uppercase text-xs'>costomer service   </li>
        </ul>


    </div>
    
    <div id="foot-item" className='w-44 hidden md:block ' >
        <h1 className=' uppercase text-lg '>social</h1>
        <ul>
            <li className=' uppercase text-xs'>instagram</li>
            <li className=' uppercase text-xs'>facebook</li>
            <li className=' uppercase text-xs'>twitter</li>
            
        </ul>


    </div>


    <div id="join_comunity"  className='w-52 hidden md:flex flex-col gap-2'>
        <h1 className=' uppercase text' >join our community</h1>
        <input className='w-full bg-transparent capitalize' type="text" placeholder='enter your mail ✉ ' />
    </div>

    <div id="toggle" className=' text-lg  md:hidden sm:block'>
      <i class="ri-menu-3-line"></i>
      </div>


    </div>
  )
}

export default Footer