import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
    
const ProductUpdate = () => {
   
    
   const[title, setTitle] = useState()
    const[price, setPrice]=useState()
    const [images,setImages] = useState()

    const [productInfos,setProducts] = useState([])

    const {id}  = useParams()

   const getProductDetails = async () => {
        
        await axios.get(`http://localhost:8080/api/getpost/${id}`,{headers: {"Authorization":localStorage.token}})
       
        .then((res) =>{
            setProducts(res.data.postInformations)
            console.log('info',productInfos)
        })
        .catch((err)=>{
            console.log(err)
        })}
    
    
    useEffect(()=>{
        getProductDetails()  
    },[])

   

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formdata = new FormData()

       
        formdata.append('title', title)
        formdata.append('price', price)
                    
      
        await axios.put(`http://localhost:8080/api/updatePost/${id}`, formdata,
        {
        headers: {
            "content-Type":'multipart/form-data',
            "Authorization":localStorage.token
        }}
        )
        .then((res)=>{
            console.log(formdata)
        })
        .catch((e)=>{
            console.log('e', e)
        })
        
    }

    return (
    <div className='border h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl mb-10'>Update product</h1>

        <form onSubmit={handleSubmit} className='flex flex-col w-full sm:w-5/12 lg:w-3/12' encType='multipart/form-data'>
                
            <input type="text"
                    className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                    placeholder={productInfos.title}
                    onChange={(e)=> {setTitle(e.target.value)}}/>
            
            <input type="number"
                    className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                    placeholder={productInfos.price}
                    onChange={(e)=> {setPrice(e.target.value)}}/>
            
            <button type="submit" className='bg-black text-gray-100 py-3 text-sm w-full mt-2'> update</button>
        </form>
    </div>
    )
}

 
export default ProductUpdate;