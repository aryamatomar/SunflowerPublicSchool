import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import HeroCarousel from './components/HeroCarousel';
import StatsSection from './components/StatsSection';
import SharedCommitment from './components/SharedCommitment';
import NoticeBoard from './components/NoticeBoard';
import VisionMissionObjective from './components/VisionMissionObjective';
import FourPillars from './components/FourPillars';
import CoreValues from './components/CoreValues';
import QualityEducation from './components/QualityEducation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans selection:bg-amber-100 selection:text-blue-900">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header with Logo & Motto */}
      <Header />

      {/* 3. Navigation Bar */}
      <Navbar />

      {/* 4. Notice Ticker Bar */}
      <NoticeTicker />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 5. Hero Carousel */}
        <HeroCarousel />

        {/* 6. Key Statistics */}
        <StatsSection />

        {/* 7. Shared Commitment & Aim */}
        <SharedCommitment />

        {/* 8. Notice Board Box */}
        <NoticeBoard />

        {/* 9. Vision, Mission & Objective */}
        <VisionMissionObjective />

        {/* 10. Four Pillars */}
        <FourPillars />

        {/* 11. Core Values */}
        <CoreValues />

        {/* 12. Quality Education in Our School */}
        <QualityEducation />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
