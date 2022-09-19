import React, {useState} from 'react' ;
import {Link, useNavigate} from 'react-router-dom'
import { BsUser } from 'react-icons/bs';
import { useAuth } from '../context/authContext';
import axios from 'axios';
import Dashboard from './Dashboard';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const {user} = useAuth()
    const navigate = useNavigate()

    console.log('currentUser', user)

    const navbarChange = () =>{
        if( window.scrollY >= 16){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    const logout = async () => {

        await axios.get('http://localhost:8080/api/logout',{headers: {"Authorization":localStorage.token}})
    }

    window.addEventListener('scroll', navbarChange)
    console.log(localStorage)
   return (


    <header className={navbar? 'flex top-0 border justify-between m-3 w-[97vw] items-center h-16 fixed  duration-400  bg-white/[0.9]  ' : 'flex top-0 border-transparent border z-50 justify-between m-3 w-[97vw] items-center h-16 fixed duration-400'}>
        <span className='font-bold text-5xl'>LOGO</span>
        <nav className='w-1/3 '>
            
           
            {localStorage.firstName?
                <ul className='flex  justify-between '>
                    <li><Link to='/'>Home</Link></li>
                    <li ><Link to='/shop'>Shop</Link></li>

                    {
                      localStorage.role==1?

                      <li ><Link to='/dashboard'>dashboard</Link></li>:
                      null
       
                    }
                    <li ><Link to='/product'>Products</Link></li>
                    <li ><Link to='/about'>About</Link></li>
                    <li ><Link to='/contact'>Contact</Link></li>
                    <button onClick={() =>{
                        
                        logout();
                        localStorage.clear()
                        navigate('/login')}}>logout
                        
                    </button>
                </ul> :

                <ul className='flex  justify-between '>
                    <li><Link to='/'>Home</Link></li>
                    <li ><Link to='/login'>Login</Link></li>
                    <li ><Link to='/register'>Register</Link></li>
                </ul>
            }
        </nav>
    
    </header>
   )
  
}

export default Header