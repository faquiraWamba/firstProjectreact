import React, { createContext, useState } from "react"


const DarkModeContext = createContext()




function DarkModeProvider(props) {
    
    const [toggle, setToggle] = useState(false)
    const toggleDarkMode = () =>{
    setToggle(!toggle)
}

    return (
        <DarkModeContext.Provider value={{toggle, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}
export {DarkModeProvider, DarkModeContext}