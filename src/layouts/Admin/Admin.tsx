import React, { ReactNode } from 'react'
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';

interface AdminProps {
  children: ReactNode;
}

export const Admin: React.FC<AdminProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer/>
    </div>
  )
}
