import React from 'react'
import Promo from './Promo'
import Collection from './Collection'
import Costom_design from "./Costom design";

import './css/home.css'



function Home() {
  return (
    <>
    <div id="home" className=' w-full   p-5   flex flex-col-reverse md:flex-row'>
        <div className=' w-full md:w-1/2 h-1/2 md:h-3/4  flex justify-center  '>
                <img className='  shadow-lg shadow-slate-400 w-full  object-top rounded-3xl object-cover '  src="https://i.pinimg.com/564x/75/29/f5/7529f5aafff6350204f2662f0054d51e.jpg" alt="" />
        </div>
        <div className='w-full md:w-1/2   p-2'>
            <div className='w-full h-1/2 flex justify-center flex-col '>
                <h1 className='brand_name text-center text-6xl'  >Shoplft</h1>
                <p className=' text-center text-3xl font-mono capitalize'>fashion made by Quality</p>
                
            </div>
            <div className='hidden w-full h-1/2 md:flex gap-1 '>
              <div className='w-1/2 h-hull rounded-2xl    '>
                <img className='w-full h-full  rounded-3xl object-cover shadow-lg shadow-slate-400' src="https://i.pinimg.com/236x/dc/c4/75/dcc4754486e4e977306cb469804cf1ec.jpg" alt="" />
              </div>
              <div className='w-1/2 h-hull rounded-2xl  '>
                <img className='w-full h-full  rounded-3xl object-cover' src="https://i.pinimg.com/564x/43/bc/f4/43bcf480910753d15442b74b81afd009.jpg" alt=""  />
              </div>

            </div>
        </div>

    </div>
    <Promo/>
    <Collection/>
    <Costom_design/>
    
    </>
  )
}

export default Home
