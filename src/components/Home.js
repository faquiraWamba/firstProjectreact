import React from 'react'
import img from "../images/Frame_583_2048x.webp"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <section className='h-full w-4/3 flex border'>
        <div className='h-full'>
          <img src ={img}/>
        </div>
        <div className='flex  items-center'>
          <div className='flex flex-col'>
            <span className='text-sm font-bold'> Stock update</span>
            <h1 className='text-4xl'>White essentials restoked</h1>
            <p className='text-xm font-thin'>Make sure you don't miss out on the LT 01 Court Lite White/ Off-White. Again.</p>
            <Link to='/products' p className='text-xm font-thin'>Shop now</Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home