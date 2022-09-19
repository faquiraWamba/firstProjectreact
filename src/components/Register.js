import React, {useState} from "react";
import { useAuth } from "../context/authContext";


const Register = () => {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[firstName, setFirstName] = useState()
    const[lastName, setLastName] = useState()

    const {register, loader, errorMessage, successMessage} = useAuth()

    
    const userRegisterData = {
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(userRegisterData) 
    }

    return ( 
        <div className='border h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl mb-10'>Register</h1>

        <form onSubmit={handleSubmit} className='flex flex-col w-full sm:w-5/12 lg:w-3/12'>
                {errorMessage && (
                    <div className={'h-10 mb-10 px-4 py-8 bg-red-300 text-white flex justify-center items-center w-full'}>
                        {errorMessage}
                    </div>
                )}
            <input type="text"
                   onChange={(e)=> {setFirstName(e.target.value)}}
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'FirstName'}/>
            <input type="text"
                   onChange={(e)=> {setLastName(e.target.value)}}
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'LastName'}/>
            <input type="email"
                   onChange={(e)=> {setEmail(e.target.value)}}
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm'
                   placeholder={'Email'}/>
            <input type="password"
                   onChange={(e)=> {setPassword(e.target.value)}}
                   className='input-form mb-8 h-10 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm' 
                   placeholder={'Password'}/>
            <button className='bg-black text-gray-100 py-3 text-sm w-full mt-2'>{loader ? 'Loading...' : 'Register'}</button>
        </form>
    </div>
     );
}
 
export default Register;