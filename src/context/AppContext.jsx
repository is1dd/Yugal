import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AppContext = createContext();
export default function AppContextProvider({children}) {
    const [isDark,setIsDark]=useState(false);
    const toggleDark = ()=>{
        setIsDark(!isDark);
    }
      return (
    <AppContext.Provider value={{ isDark, toggleDark }}>
        {children}
    </AppContext.Provider>
  )
}
