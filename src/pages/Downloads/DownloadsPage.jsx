import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';

export default function DownloadsPage() {
  const downloadItems = [
    { title: "School Rules & Student Guidelines", docUrl: "https://sunfloweragra.com/docs/rules-and-regulations.pdf" },
    { title: "Academic Calendar & Yearly Planner", docUrl: "https://sunfloweragra.com/docs/yearly%20planner.docx" },
    { title: "Annual Activity Calendar 2026-27", docUrl: "https://sunfloweragra.com/docs/ANNUAL%20ACTIVITY%20CALENDAR%20202627.pdf" },
    { title: "Fee Structure & Fee Rules", docUrl: "https://sunfloweragra.com/docs/fee-structure.jpg" },
    { title: "Faculty Details", docUrl: "https://sunfloweragra.com/docs/Faculty-Details.pdf" },
    { title: "List of School Management Committee (SMC)", docUrl: "https://sunfloweragra.com/docs/SCHOOL%20COMMITTEE%20MEMBERS.pdf" },
    { title: "List of Parent Teachers Associations (PTA)", docUrl: "https://sunfloweragra.com/docs/PARENTS%20TEACHER%20ASSOCIATION.pdf" },
    { title: "General Affiliation Documents", docUrl: "https://sunfloweragra.com/docs/1-GENERAL%20AFFILIATION%20DOCS.pdf" },
    { title: "Society / Trust Registration Certificate", docUrl: "https://sunfloweragra.com/docs/2-SOCIETY%20TRUST%20DOCS.jpg" },
    { title: "No Objection Certificate (NOC)", docUrl: "https://sunfloweragra.com/docs/3-NOC%20(1).pdf" },
    { title: "Recognition Certificate Under RTE Act 2009", docUrl: "https://sunfloweragra.com/docs/4-RTE%20DOCS.jpeg" },
    { title: "Building Safety Certificate", docUrl: "https://sunfloweragra.com/docs/5-BUILDING%20SAFETY.pdf" },
    { title: "Fire Safety Certificate", docUrl: "https://sunfloweragra.com/docs/6-FIRE%20AND%20LIFE%20SAFETY%20DOCS.pdf" },
    { title: "Health Sanitation Certificate", docUrl: "https://sunfloweragra.com/docs/copy-health-sanitation.jpg" },
    { title: "Self Certification by School", docUrl: "https://sunfloweragra.com/docs/copy-self-declaration.pdf" },
    { title: "Water and Sanitation Certificates", docUrl: "https://sunfloweragra.com/docs/copy-water-sanitation.pdf" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Downloads' }]} />
      <PageHeader 
        title="Downloads & School Documents" 
        subtitle="Official forms, calendars, rules, and CBSE disclosures available for download"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadItems.map((item, idx) => (
            <DocumentCard key={idx} title={item.title} docUrl={item.docUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
