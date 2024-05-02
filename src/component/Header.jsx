import React from 'react'
import logo from '../assets/logo.jpeg'
import { Outlet, Link } from "react-router-dom";

// function slidernav() {
//   let toggle_nav = document.getElementById('toggle')
//   let slider_nav = document.getElementById('slidernav')
//   console.log(toggle_nav);  
//     console.log(slider_nav);
    
//     slider_nav.style.transform = translateY('45vh')
    
    

// }




function Header() {
  return (
    <>
    <nav className=' w-full min-h-20 relative bg-zinc-200 flex items-center justify-between p-1 px-6'>
      <div id="lft" className='flex items-center gap-4'>
      <div id="brand" className='flex items-center ' >
        <img className='w-14 h-14 md:w-20 md:h-20 ' src = {logo} alt="logo" />
        <h1 className='brand_name uppercase font-sans text-2xl' >shoplft</h1>
      </div>
      <div id="nav-item" className=' hidden   md:flex h-full  gap-2 uppercase font-mono text-lg items-end '>
          <Link to={'/'}>
          <h4 className=' p-2 hover:border-b border-stone-400' >home</h4></Link>
          
          <Link to={'/Collection'}>
          <h4 className=' p-2 hover:border-b border-stone-400' > Collection </h4></Link>
          
          <Link to={'/costom-designe'}>
          <h4 className=' p-2 hover:border-b border-stone-400' > costom design </h4></Link>
          
          <Link to={"/contact"}>
          <h4 className=' p-2 hover:border-b border-stone-400' > contact us </h4></Link>

          
      </div>
      </div>

      <div id="rit" className='hidden   md:flex  '>

        <div id="login" className='h-full w-full flex items-center text-2xl p-1'>

          
          <i class=" h-12 w-full ri-user-3-line border-b-2  p-2  hover:cursor-pointer  hover:border-stone-400  "></i>

          {/* <i class="h-12 w-full ri-login-box-line border-b-2  p-2  hover:cursor-pointer hover:border-stone-400  "></i> */}

          <i class="h-12 w-full ri-shopping-bag-3-line border-b -2  p-2  hover:cursor-pointer hover:border-stone-400  "></i>

        </div>
      </div>
      <div id="toggle" className=' text-lg  md:hidden sm:block'>
      <i class="ri-menu-3-line"></i>
      </div>
      <div id="slidernav" className='slidernav md:hidden absolute w-full h- bg-zinc-200  left-0'>

      <div id="nav-item" className=' flex flex-col   gap-2 uppercase font-mono text-lg items-center '>
          <Link to={'/'}>
          <h4 className=' p-2 hover:border-b border-stone-400' >home</h4></Link>
          
          <Link to={'/Collection'}>
          <h4 className=' p-2 hover:border-b border-stone-400' > Collection </h4></Link>
          
          <Link to={'/costom-designe'}>
          <h4 className=' p-2 hover:border-b border-stone-400' > costom design </h4></Link>
          
          <Link to={"/contact"}>
          <h4 className=' p-2 hover:border-b border-stone-400' > contact us </h4></Link>
        
      </div>


      <div id="login" className='  flex items-center justify-center text-2xl p-1'>
          
          <i class=" h-12  ri-user-3-line border-b-2  p-2  hover:cursor-pointer  hover:border-stone-400  "></i>
          <i class="h-12  ri-shopping-bag-3-line border-b -2  p-2  hover:cursor-pointer hover:border-stone-400  "></i>

      </div>

      </div>

    </nav>
    
    <Outlet />
    
    
    </>
  )
}

export default Header