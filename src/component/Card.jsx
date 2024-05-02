import React from 'react'

function Card(props) {
    console.log(props.name);
  return (
    <div className='w-80  border-4 border- rounded-xl p-2    ' >
        <div className=' rounded-md overflow-hidden h-4/5' id="itm-img">
            <img className='w-64 h-64 md:w-80 md:h-96 rounded-2xl capitalize ' src={props.url} alt="" />
        </div>
    <div id="itm-detals" className='  border-zinc-200 w-full flex flex-wrap items-center justify-between  '>
            <h1 className=' font-mono capitalize text-2xl p-2 w-full'>{props.name || "Casule shirt"} </h1>
           
            <p className=' i font-mono text-lg p-2'> {props.price || 400+'₹'   } </p>
            <h4 className=' hover:bg-black  hover:text-white text-right font-mono uppercase text-xl border-2 p-2 rounded-2xl border-black  '>add cart</h4>
        </div>
    </div>
  )
}

export default Card