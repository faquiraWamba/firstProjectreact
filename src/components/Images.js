import React from 'react'

const Images = ({hash}) =>{
  <div className='h-80 w-80'>

    <img className='h-full w-full' alt='article img' src = {`http://localhost:8080/${hash}`}/>
    
  </div>
  

}
export default Images