import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Navbar from './Navbar';
import NoticeTicker from './NoticeTicker';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F4F7FA] text-gray-800 flex flex-col font-sans selection:bg-amber-100 selection:text-blue-900">
      <TopBar />
      <Header />
      <Navbar />
      <NoticeTicker />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
