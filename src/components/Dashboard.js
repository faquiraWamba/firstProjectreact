import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { BsSnapchat } from 'react-icons/bs';
import Shop from './Shop'

function Dashboard() {
    const [getProducts, setGetProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setSuccessMessage]=useState("")
    const[confirmDelete, setConfirmDelete]= useState("")
    const [logOutMessage,setLogOutMessage] = useState(" ")
    const productId = useParams()
  
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
    

    
    const updatePost = async() =>{
        await axios.put('http://localhost:8080/api/updatePost',{headers: {"Authorization":localStorage.token}})
    }

  
    useEffect(()=>{
      getAllProducts()
    }, [])
  return (
    <div className='mt-20 flex flex-column' >
         {errorMessage && (
            <div className={'h-10 mb-10 px-4 py-8 bg-red-300 text-white flex justify-center items-center w-full'}>
                {errorMessage}
            </div>
        )}
         {successMessage && (
            <div className={'fixed top-0 z-50 h-10 mb-10 px-4 py-8 bg-red-300 text-white flex justify-center items-center w-full'}>
                {successMessage}
            </div>
        )}
        
        <h1>Dashboard</h1>
      {loader ? <h1 className='font-bold text-3xl'>Loading...</h1> :
        <div className='flex flex-wrap'>
          {
            getProducts.map((product) => {
              return (
                <>
                <div  className="mt-40 border h-[555px] border-black px-4" >
                    <div className={"h-4/5 relative w-96  border mx-4 bg-[#ECECEC]"}>
                        <img  className= "absolute top-0 h-full w-full  z-20 duration-1000"  src= {`http://localhost:8080/${product.images[0].hash}`} alt="shoes"/>
                    </div>
                    <div className="mx-4">
                        <div className="font-bold">{product.title}</div>
                        <div className="font-thin ">{product.price}</div>
                    </div>
                    <div className='mx-7 flex justify-between mt-3'>
                    {confirmDelete && (
          <div className = 'h-[15vh]   bg-gray-100 w-full flex flex-col justify-between items-center ' >
            <div className={'h-10 px-4 py-8  black flex justify-center items-center w-full'}>
            {confirmDelete}
            </div>
            <div>
              <button 
              className='bg-green-600 px-3 py-2 text-white '
              onClick={async() =>{
                try{
                    await axios.delete(`http://localhost:8080/api/deletePost/${product.id}`,{headers: {"Authorization":localStorage.token}})
                    .then((res)=>{
                        console.log('res',res)
                        setSuccessMessage(res.data.msg)
                        setConfirmDelete('')
                    })
                    .catch((err) => {
                        setErrorMessage(err)
                    })
                }
                catch (err) {
                    console.log('err', err)
                }}}>ok</button>
              <button 
              className='bg-red-600 px-3 py-2 text-white '
              onClick={()=>{setConfirmDelete('')}}>cancel</button>
            </div>
          </div>
        )}
       
        
                        <button type='submit'  className=' border-bgray-500 p-3 bg-gray-500 text-white'
                            onClick={()=>{setConfirmDelete("delete this post?")}}>
                            Delete
                        </button>
                        <Link to = {`/products/${product.id}`} className=' border-gray-500 p-3 bg-gray-500 text-white'>Details</Link>
                        <Link to = {`/productUpdate/${product.id}`} className=' border-bgray-500 p-3 bg-gray-500 text-white'>update</Link>

                    </div>
                </div>
                </>
                  )
            })
          }


        </div>
      }
                
        <div>
            <Link to="/createProduct" className=' border-black bg-black text-white'>Add product</Link>
        </div>

    </div>
  )
}

export default Dashboard