import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import HomePage from './pages/Home/HomePage';
import Journey from './pages/About/Journey';
import VisionMission from './pages/About/VisionMission';
import Motto from './pages/About/Motto';
import Director from './pages/About/Director';
import Principal from './pages/About/Principal';
import Manager from './pages/About/Manager';
import Disclosure from './pages/About/Disclosure';
import AcademicsPage from './pages/Academics/AcademicsPage';
import InfrastructurePage from './pages/Infrastructure/InfrastructurePage';
import AdmissionPage from './pages/Admission/AdmissionPage';
import DownloadsPage from './pages/Downloads/DownloadsPage';
import ActivitiesPage from './pages/Activities/ActivitiesPage';
import StudentTCPage from './pages/StudentTC/StudentTCPage';
import AnnualFunctionPage from './pages/AnnualFunction/AnnualFunctionPage';
import ContactPage from './pages/Contact/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/journey" element={<Journey />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/motto" element={<Motto />} />
          <Route path="/about/director" element={<Director />} />
          <Route path="/about/principal" element={<Principal />} />
          <Route path="/about/manager" element={<Manager />} />
          <Route path="/about/disclosure" element={<Disclosure />} />
          <Route path="/information" element={<Disclosure />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/student-tc" element={<StudentTCPage />} />
          <Route path="/annual-function-2025" element={<AnnualFunctionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
