import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      <Navbar />
      <div className="flex-1 pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
