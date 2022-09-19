import React, { createRef, useState } from 'react'
import axios from 'axios'

function ProductCreate() {

    const[title, setTitle] = useState()
    const[price, setPrice]=useState()
    const fileInput = createRef()
    const formdata = new FormData()

    const productData = {
        title : title,
        price:price,
        authorId:localStorage.id
    }
    
   

    const handleSubmit = async (e) => {
        e.preventDefault()
      
             for (let item of fileInput.current.files){
                var hash = item.name
                
        }
        const image ={
            hash :  hash
        }
        console.log('image',fileInput.current.files[0])
        console.log('formdata',productData)
       /* await axios.post('http://localhost:8080/api/createpost', productData,{headers: {"content-Type":'multipart/form-data'}})
        .then((res)=>{
            console.log("mon token",localStorage.token)
        })
        .catch((e)=>{
            console.log('e', e)
        })*/
        
    }

  return (
    <div className='border h-screen flex flex-col justify-center items-center'>
         <h1 className='font-bold text-3xl mb-10'>Add a product</h1>

        <form onSubmit={handleSubmit} className='flex flex-col w-full sm:w-5/12 lg:w-3/12' encType='multipart/form-data'>
                
            <input type="text"
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'product name'}
                   onChange={(e)=> {setTitle(e.target.value)}}/>
            
            <input type="number"
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'price'}
                   onChange={(e)=> {setPrice(e.target.value)}}/>
            <input  type="file"
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm' 
                   placeholder={'product pictures'}
                   ref={fileInput}
                   multiple/>
            <button type="submit" className='bg-black text-gray-100 py-3 text-sm w-full mt-2'> Create</button>
        </form>
    </div>
  )
}

export default ProductCreate