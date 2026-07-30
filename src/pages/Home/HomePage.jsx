import React from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import StatsSection from '../../components/StatsSection';
import SharedCommitment from '../../components/SharedCommitment';
import NoticeBoard from '../../components/NoticeBoard';
import VisionMissionObjective from '../../components/VisionMissionObjective';
import FourPillars from '../../components/FourPillars';
import CoreValues from '../../components/CoreValues';
import QualityEducation from '../../components/QualityEducation';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsSection />
      <SharedCommitment />
      <NoticeBoard />
      <VisionMissionObjective />
      <FourPillars />
      <CoreValues />
      <QualityEducation />
    </>
  );
}
