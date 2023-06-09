"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { UserContext } from './userContext'
import React from "react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({children,}: {children: React.ReactNode}) {
// Initialize a state object for the user. This object will be empty by default.  
  const [user, setUser] = React.useState({ name: "", email: "", phone: "",country: "",city: "",zip: "",address: ""  });
  
  return (
    // Using React Context to provide user data to all child components.
    // When setUser is called from any child component, it will update the 'user' state here, effectively communicating the state change across the application.
    <UserContext.Provider value={{ user, setUser }}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </UserContext.Provider>
  )
}
