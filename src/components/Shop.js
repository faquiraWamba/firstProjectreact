import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { BsSnapchat } from 'react-icons/bs';
import Article from './Article';

const Shop = () => {
 
    const [getProducts, setGetProducts] = useState([])
    const [loader, setLoader] = useState(false)
    
  
    const getAllProducts = async () =>{
  
      setLoader(true)
  
      await axios.get('http://localhost:8080/api/listPost',{headers: {"Authorization":localStorage.token}})
      .then((res) =>{
        console.log('res',res)
        setGetProducts(res.data.postList)
        console.log('list', res.data.postList)
      })
      .catch((err) => {
        console.log('error', err)
      })
      
      setLoader(false)
    }
  
    useEffect(()=>{
      getAllProducts()
    }, [])
  
    return (
      <>
      <div className='mt-40'>Welcome to Product</div>
      <BsSnapchat className='text-5xl'/>
      {loader ? <h1 className='font-bold text-3xl'>Loading...</h1> :
        <div className='flex flex-wrap'>
          {
            getProducts.map((product) => {
              return (
                <>
                {product.title}
                  <Article price={`$ ${product.price}`} title ={product.title} img1={product.images[0].hash} img2={product.images[1].hash } id={product.id} />
                </>
                  )
            })
          }
        </div>
      }
      </>
    )
  
}

export default Shop