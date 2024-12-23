"use client"
import { ThemeProvider, useTheme } from 'next-themes'
import React from 'react'


const MyProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
    enableSystem
    attribute="class"
    defaultTheme='dark'
    disableTransitionOnChange
    >
        {children}

     
    </ThemeProvider>
  )
}

export default MyProvider;

