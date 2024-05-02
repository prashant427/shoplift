import React from 'react'

function Contact() {
  return (
    <div className='w-full p-4  flex items-center justify-center flex-col'>
      <h1 className='uppercase text-4xl  md:text-6xl brand_name text-center'>contact us</h1>
      <form className='w-4/5 h-full  bg-zinc-300'>
      
<div className='w-full h-full flex flex-shrink-0 flex-wrap gap-20 p-16 '>
<label className=' capitalize  flex flex-col gap-4 w-full md:w-72  ' > first name
        <input type="text" className=' h-8 bg-transparent capitalize font-bold border-b-4 border-black '  placeholder='jone  ' />
      </label>
      
      <label className=' capitalize  flex flex-col gap-4 w-full md:w-72' > last name
        <input type="text" className=' h-8 bg-transparent capitalize font-bold border-b-4 border-black '  placeholder=' deso ' />
      </label>
      
      <label className=' capitalize  flex flex-col gap-4 w-full md:w-72 ' > email name
        <input type="text" className=' h-8 bg-transparent capitalize font-bold border-b-4 border-black '  placeholder='jonedeso@exampal.com ' />
      </label>

      <label className=' capitalize  flex flex-col gap-4 w-full md:w-72 ' > phone no.
        <input type="Number" className=' h-8 bg-transparent  font-bold border-b-4 border-black '  placeholder='+xx xxxx xxxx xx ' />
      </label>

      <label className=' capitalize  flex flex-col gap-4  ' > message
        <textarea name="message" className='bg-transparent  font-bold border-b-4 border-black w-full md:w-96'  id="" cols="40"  rows="5"></textarea>
      </label>
</div>




      <button className=' w-8/12 md:w-72 h-12 bg-black text-white m-10  text-center '>submit</button>
      
      </form>
      
    </div>
  )
}

export default Contact