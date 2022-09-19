import { useContext } from React
import { DarkModeContext } from './context/darkMode';
import React from 'react';

const {toggle, toggleDarkMode} = useContext(DarkModeContext)
const Container = () =>{
    <div className={toggle ? 'h-screen bg-black text-white w-full flex flex-col justify-center items-center':'h-screen bg-white text-black w-full flex flex-col justify-center items-center' }>
        <h1 className={toggle ?'text-5xl bold text-black' : 'text-5xl bold text-white' }>{toggle? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={toggleDarkMode} className={toggle ? 'px-8 py-4 bg-white text-black mt-20' : 'px-8 py-4 bg-black text-white mt-20'} >
            {toggle? "Light Mode" : "Dark Mode"}
        </button>

    </div>
}
