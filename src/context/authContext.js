import axios from "axios";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {useNavigate} from 'react-router-dom'

const  authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}



export function AuthProvider ({children}) {

    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessrMessage] = useState("")
    const [loader, setLoader] = useState(false)

    let navigate = useNavigate()


    const login = async (data) => {
        try {

            setLoader(true)
            await axios.post('http://localhost:8080/api/login', data)
                .then((res)=>{
                    localStorage.setItem('token', res.data.user.token)
                    for (const [key, value] of Object.entries(res.data.user)) {
                        localStorage.setItem(key, value)
                    }
                    console.log(localStorage)
                   navigate('/')
                    setLoader(false)
                })
                .catch((e)=>{
                    setErrorMessage(e.response.data.msg)
                    setLoader(false)
                    console.log('e', e)
                })
        } catch (err) {
            setErrorMessage(err.response.data.msg)
            console.log('err', err)
        }
    }

    const register = async (input) =>{
        console.log('input', input)
        //setLoader(true)
      const res = await axios.post('http://localhost:8080/api/register', input)
      console.log('response',res)
       /* .then((res) => {
            setSuccessrMessage(res.data.msg)
            setUser(res.data.user)
            navigate('/login')
            setLoader(false)
        })
        .catch((err) => {
            setLoader(false)
            setErrorMessage(err.response.data.msg)
            console.log('error',err)
        })*/

    }

    useEffect(() => {
        const checkSession = async () => {
             await localStorage.getItem('token');
            if (localStorage.token) {
                console.log(localStorage)
                setUser(localStorage)
            }
        };
        return () => checkSession()
    },[])
    
    return (
        <authContext.Provider value={useMemo(() => ({login, register, user, loader, errorMessage, successMessage}), [user, loader, successMessage, errorMessage])}>
            {children}
        </authContext.Provider>
    )
}