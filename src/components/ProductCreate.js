import React, { useState } from 'react'
import axios from 'axios'

function ProductCreate() {

    const[title, setTitle] = useState()
    const[price, setPrice]=useState()
    const [images,setImages] = useState()
    const [successMessage, setSuccessMessage] = useState("")

    const listImages = []; //mutiples images array
    const [isFilePicked, setIsFilePicked] = useState(false)

    

    const handleChange = (e) => {
        //check if user select multiple images
        if(e.target.files.length == 1){
            setImages(e.target.files[0]);
        }
       else{
            //save multiple images in an array
            for(const item of e.target.files){
                listImages.push(item)
            }
            setImages(listImages)
        }
        setIsFilePicked(true);

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formdata = new FormData()

        //check if user select multiple images
        if(images.length ==1){
            formdata.append('images', images)
        }
        else{
            for(const item of images){
                formdata.append('images',item)
            }

        }
        formdata.append('title', title)
        formdata.append('price', price)
        formdata.append('authorId', localStorage.id)
                 
        console.log(formdata)
       await axios.post('http://localhost:8080/api/createpost', formdata,
       {
        headers: {
            "content-Type":'multipart/form-data',
            "Authorization":localStorage.token
        }}
        )
        .then((res)=>{
            console.log("product create with success",res.data)
            setSuccessMessage(res.data.msg)
        })
        .catch((e)=>{
            console.log('e', e)
        })
        
    }

  return (

    <div className='border h-screen flex flex-col justify-center items-center'>

    
    {successMessage && (
        <div className={'fixed top-0 z-50 h-10 mb-10 px-4 py-8 bg-red-300 text-white flex justify-center items-center w-full'}>
            {successMessage}
        </div>
    )}
   

         <h1 className='font-bold text-3xl mb-10'>Add a product</h1>

        <form onSubmit={handleSubmit} className='flex flex-col w-full sm:w-5/12 lg:w-3/12' encType='multipart/form-data'>
                
            <input type="text"
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder='product name'
                   onChange={(e)=> {setTitle(e.target.value)}}/>
            
            <input type="number"
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'price'}
                   onChange={(e)=> {setPrice(e.target.value)}}/>
            <input  type="file"
                   name='images'
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm' 
                   placeholder={'product pictures'}
                   onChange ={handleChange}
                   multiple/>
            <button type="submit" className='bg-black text-gray-100 py-3 text-sm w-full mt-2'> Create</button>
        </form>
    </div>
  )
}

export default ProductCreate