import React from 'react'
import Card from './Card'

function Collection() {
  return (
    <div className=' w-full min-h-screen p-16 bg-zinc-100  ' >
      <div id="collection-con" className=' w-full h-full '>
        
        <div id="coll-nav" className='flex  flex-col gap-2 md:flex-row justify-between'>
          <h4 className='font-mono capitalize text-2xl'>shop by essentials</h4>
          <ul className='flex flex-wrap gap-4 capitalize text-xl font-mono'>
            <li className=' hover:bg-black  hover:text-white px-4 border-2 border-black rounded-full'>  <h4>All</h4> </li>

            <li className=' hover:bg-black  hover:text-white px-4 border-2 border-black rounded-full'>  <h4>summer</h4> </li>

            <li className=' hover:bg-black  hover:text-white px-4 border-2 border-black rounded-full'>  <h4>New Ariv</h4>  </li>

            <li className=' hover:bg-black  hover:text-white px-4 border-2 border-black rounded-full'>  <h4>best sell</h4> </li>

            <li className=' hover:bg-black  hover:text-white px-4 border-2 border-black rounded-full'>  <h4>winter</h4> </li>
          </ul>
        </div>

        <div id="collection" className='p-4 flex   items-start  flex-wrap justify-around gap-10 w-full h-full m-4 '>
          <Card url = "https://i.pinimg.com/564x/ec/48/7e/ec487ec339cacc808f02b7ec830ab2c7.jpg" name = "Pullover Hoodie Man" price = '400₹' />
        
          <Card url = "https://i.pinimg.com/236x/57/41/14/57411422bd5e3b2a4ee29ea5c8fdf404.jpg" name = "corduroy jacket" price = '400₹'  />

          <Card url = "https://i.pinimg.com/236x/cf/f8/e3/cff8e36e6380de809536b4fc39b7e4b4.jpg" name = "Kimono casual shirt" price = '400₹' />
        
          <Card url = "https://i.pinimg.com/564x/0d/33/b8/0d33b8cde4e29ac19dd13a28e3ade78a.jpg" name = "Bomber jacket " price = '400₹' />

          <Card url = "https://i.pinimg.com/474x/4a/0c/82/4a0c82bb1e93a14940d17f4d81348741.jpg" name = "trible print jogger " price = '400₹' />

          <Card url = "https://i.pinimg.com/236x/f1/f0/91/f1f091de2ad1bedad6c3c99e9f02481a.jpg" name = "gro print shirt " price = '400₹' />
          
          
        
        </div>



      </div>

    </div>
  )
}

export default Collection