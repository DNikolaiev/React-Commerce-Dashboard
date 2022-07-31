import React, { createContext, useContext, useState } from 'react';
import { themeColors } from '../data/dummy';

const StateContext = createContext();
const initialState = {
    chat: false,
    cart: false,
    userProfile: false, 
    notification: false
}

export const ContextProvider = ({children}) => {
    const [currentColor, setCurrentColor] = useState(themeColors[0].color)
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)

    const handleClick = (clicked, value=true) => setIsClicked({...initialState, [clicked]: value});

    const setMode = (mode) => {
        setCurrentMode(mode);
        localStorage.setItem('themeMode',mode)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode',color)
        setThemeSettings(false)
    }
    return(
        <StateContext.Provider 
        value = {{
            activeMenu,
            setActiveMenu,
            isClicked,
            initialState,
            setIsClicked,
            handleClick,
            screenSize,
            setscreenSize,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
            setMode, 
            setColor
        }}
        >
                {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);