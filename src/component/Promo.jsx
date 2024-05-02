import React from 'react'

function promo() {
  return (
    <div className='w-full min-h-full  text-stone-500  relative p-20' >
      <div className=" z-0 absolute top-10 left-1/3 fly-img rounded-full overflow-hidden w-14 h-14 md:w-28 md:h-28"><img src="https://i.pinimg.com/236x/8b/9a/bb/8b9abbf2376521a41febb1f688c8175a.jpg" alt="" /></div>
      <div className=" z-0 absolute bottom-14 right-1/4 fly-img rounded-full overflow-hidden w-14 h-14  md:w-28 md:h-28"><img src="https://i.pinimg.com/236x/55/ed/e5/55ede517b4766237707ad53c57610b8e.jpg" alt="" /></div>
      <div id="promo" className='z-10 relative max-w-3/2 h-1/2  '>
        <h1 className='font-mono text-2xl md:text-6xl text-center capitalize'>puremod stuning for elevated everyday life. style change <span className='  px-4  border-4 rounded-full border-stone-200' >with seasons</span> united by the liberating essence of travel-inspired light-heartedness</h1>
      </div>

    </div>
  )
}

export default promo