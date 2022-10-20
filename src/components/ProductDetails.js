import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import id from "./Article"

const ProductDetails = () => {

    const [productInfos,setProducts] = useState([])

    const {id}  = useParams()

     

   const getProductDetails = async () => {
        
        await axios.get(`http://localhost:8080/api/getpost/${id}`,{headers: {"Authorization":localStorage.token}})
       
        .then((res) =>{
            console.log('post informations',res.data.postInformations)
            setProducts(res.data.postInformations)
        })
        .catch((err)=>{
            console.log(err)
        })}
    const productImgs = productInfos.images
    console.log('info',productInfos)
    console.log('images',productImgs)
    useEffect(()=>{
        getProductDetails()  
    },[])


    return ( 

        <>
        <h1 className="mt-24 text-xl text-center font-bold">PRODUCT DETAILS</h1>

            <h2 className='flex w-full h-20 justify-around mt-10'>
                <div className='font-bold text-lg'>{productInfos.title}</div>
                <div className='font-bold text-lg'>{productInfos.price} FCFA</div>
            </h2>

            <div className='h-80 w-80'>

               
                            <img className='h-full w-full' alt='article img' src = {`http://localhost:8080/${productInfos.images[0].hash}`}/>
                       

            </div>
     
        </>
     );
}
 
export default ProductDetails;