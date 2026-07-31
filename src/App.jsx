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
import SMCPage from './pages/About/SMCPage';
import PTAPage from './pages/About/PTAPage';
import MembersListPage from './pages/About/MembersListPage';
import AcademicsPage from './pages/Academics/AcademicsPage';
import ExaminationPattern from './pages/Academics/ExaminationPattern';
import CodeOfConduct from './pages/Academics/CodeOfConduct';
import AssessmentPage from './pages/Academics/AssessmentPage';
import FeeStructure from './pages/Information/FeeStructure';
import SchoolTiming from './pages/Information/SchoolTiming';
import AnnualActivity from './pages/Activities/AnnualActivity';
import WorkshopsOrientation from './pages/Activities/WorkshopsOrientation';
import InfrastructurePage from './pages/Infrastructure/InfrastructurePage';
import AdmissionPage from './pages/Admission/AdmissionPage';
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
          <Route path="/about/smc" element={<SMCPage />} />
          <Route path="/smc" element={<SMCPage />} />
          <Route path="/about/pta" element={<PTAPage />} />
          <Route path="/pta" element={<PTAPage />} />
          <Route path="/about/members-list" element={<MembersListPage />} />
          <Route path="/members-list" element={<MembersListPage />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/academics/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/information/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/information/fee-structure" element={<FeeStructure />} />
          <Route path="/school-timing" element={<SchoolTiming />} />
          <Route path="/information/school-timing" element={<SchoolTiming />} />
          <Route path="/timings" element={<SchoolTiming />} />
          <Route path="/annual-activity" element={<AnnualActivity />} />
          <Route path="/activities/annual-activity" element={<AnnualActivity />} />
          <Route path="/academic-calendar" element={<AnnualActivity />} />
          <Route path="/workshops-orientation" element={<WorkshopsOrientation />} />
          <Route path="/activities/workshops-orientation" element={<WorkshopsOrientation />} />
          <Route path="/workshops" element={<WorkshopsOrientation />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/examination-pattern" element={<ExaminationPattern />} />
          <Route path="/examination-pattern" element={<ExaminationPattern />} />
          <Route path="/academics/assessment" element={<AssessmentPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/student-tc" element={<StudentTCPage />} />
          <Route path="/annual-function-2025" element={<AnnualFunctionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
