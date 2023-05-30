import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{

    const [toggleDark, setToggleDark] = useState(false)

    return (
        <DarkModeContext.Provider value={{toggleDark, setToggleDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}

DarkModeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}