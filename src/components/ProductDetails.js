import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'


const ProductDetails = () => {

    const [productInfos,setProducts] = useState([])

    const productId = useParams()

    const getProductDetails = async () => {
        
        await axios.get(`http://localhost:8080/api/getpost/${productId.id}`,{headers: {"Authorization":localStorage.token}})
       
        .then((res) =>{
            setProducts(res.data.postInformations)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    console.log('info',productInfos)

    useEffect(()=>{
       // getProductDetails()  
    },[])


    return ( 

        <>
        <h1 className="mt-20">Products details</h1>
            
               
               
                    <>
                        {productInfos.title}
                    </>
                 
                
            
        
        
        </>
     );
}
 
export default ProductDetails;