import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Calendar, Sparkles, Filter, Clock } from 'lucide-react';

export default function AnnualActivity() {
  const [selectedMonth, setSelectedMonth] = useState('ALL');

  const monthlyActivities = [
    {
      month: "APRIL ( VIDYAARAMBH & HERITAGE )",
      key: "APRIL",
      events: [
        { date: "01-04-2026", desc: "VIDYARAMBH : NEW ACADMIC SESSION \nINTERACTION WITH PARENTS OF ALL CLASSES HIGHLIGHTS RECENTS UPDATES IN CBSE TO BE IMPLEMENTED IN THE NEW SESSION" },
        { date: "02-04-2026", desc: "NEW ACADEMIC YEAR : FOR REST OF THE CLASSES TILL GRADE 10" },
        { date: "03-04-2026", desc: "HOLIDAY ON ACCOUNT OF GOOD FRIDAY" },
        { date: "06-04-2026", desc: "MEETING OF THE MEMBERS OF GRIEVANCE REDRESSAL AND VIGILANCE AWARENESS AS WELL AS SEXUAL HARRASMENT COMMITTEE TO FORMULATE POLICIES FOR THE UPCOMING SESSION" },
        { date: "10-04-2026", desc: "1st PARENT TEACHER MEET GRADE - I TO X" },
        { date: "11-04-2026", desc: "REMEMBERANCE OF JALLIANWALA BAGH MASSACRE ORGANISED BY HERITAGE AND TOURISM CLUB" },
        { date: "13/4/2026", desc: "SPECIAL ASSEMBLY ON BHIMRAO AMBEDKAR JAYANTI" },
        { date: "14/4/2026", desc: "HOLIDAY ON ACCOUNT OF BIRTH ANNIVERSARY OF BHIMRAO AMBEDKAR" },
        { date: "16/04/2026", desc: "SPEECHES & AWARENESS CAMPAIGN BY SENIOR STUDENTS ORGANISED BY ELECTORAL AND DEMOCRACY CLUB" },
        { date: "18/4/2026", desc: "SPECIAL ASSEMBLY ON WORLD HERITAGE DAY CONDUCTED BY NEHRU HOUSE" },
        { date: "22/04/2026", desc: "SPEECH, QUIZ, PAINTING, POETRY, POSTER MAKING, ESSAY WRITING, SLOGAN COMPETITION ON EARTH DAY ORGANISED BY ECO CLUB AND SHASTRI HOUSE" }
      ]
    },
    {
      month: "MAY ( HARMONY & WELLNESS )",
      key: "MAY",
      events: [
        { date: "01-05-2026", desc: "HOLIDAY" },
        { date: "02-05-2026", desc: "SPECIAL ASSEMBLY ON LABOURS DAY CONDUCTED BY TAGORE HOUSE" },
        { date: "4/5/2026 TO 9/5/2026", desc: "PERIODIC ASSESSMENT - 1 GRADE ( I TO X )" },
        { date: "09-05-2026", desc: "MOTHER'S DAY CELEBRATION CONDUCTED BY GANDHI HOUSE" },
        { date: "14/5/2026", desc: "INVESTITURE CEREMONY- 2026-27; VESTED WITH HONOUR BOUND BY DUTY" },
        { date: "16/5/2026 TO 31/6/2026", desc: "SUMMER CAMP" }
      ]
    },
    {
      month: "JUNE ( ENVIRONMENT INITIATIVES )",
      key: "JUNE",
      events: [
        { date: "18/6/2026 TO 24/6/2026", desc: "IN-SERVICE TRAINING PROGRAMMES FOR PRTs', TGTs' & PGT ( WEBINAR )" },
        { date: "25/6/2026", desc: "SCHOOL REOPENS FOR GRADE X TEACHERS" },
        { date: "26/6/2026", desc: "HOLIDAY ON ACCOUNT OF MUHARRAM" }
      ]
    },
    {
      month: "JULY ( ENVIRONMENT INITIATIVES )",
      key: "JULY",
      events: [
        { date: "01-07-2026", desc: "SCHOOL REOPENS FOR REST OF THE GRADE NURSERY TO X" },
        { date: "FIRST WEEK OF JULY 2026", desc: "INVESTITURE CEREMONY FOR STUDENT COUNCIL MEMBERS JULY 2026 ORGANISED BY ELECTORAL AND DEMOCRACY CLUB & TRIBUTE TO KARGIL MARTYRS ORGANISED BY CULTURAL AND LITERARY CLUB" },
        { date: "22/7/2026", desc: "INTER HOUSE PATRIOTIC SINGING COMPETITION CLASS LEVEL WISE (I & II, III TO V, VI TO VIII, IX X) ORGANISED BY CULTURAL AND LITERARY CLUB" },
        { date: "27/7/2026", desc: "SHORT SPEECHES, POETRY RECITAION BY STUDENTS KARGIL DIWAS ORGANISED BY CULTURAL AND LITERALLY CLUB" },
        { date: "LATE JULY & EARLY AUGUST 2026", desc: "PERIODIC ASSESSMENT - 2 GRADE ( I TO X )" }
      ]
    },
    {
      month: "AUGUST ( PATRIOTISM & CREATIVE MINDS )",
      key: "AUGUST",
      events: [
        { date: "TENTATIVE", desc: "PARENT-TEACHER MEETING TO DISCUSS THE RESULT OF SECOND PERIODIC TEST" },
        { date: "05-08-2026", desc: "DEBATE COMPETITION ON ILL EFECTS OF WAR AND RELEVANCE OF PEACE ON HIROSHIMA DAY ORGANISED BY HERITAGE AND TOURISM CLUB" },
        { date: "13/8/2026", desc: "TEEJ CELEBRATION & MEHNDI COMPETETION" },
        { date: "15/8/2026", desc: "CELEBRATION OF INDEPENDENCE DAY, HOUSE WISE- ALL CLASS ACTIVITIES (CULTURAL PROGRAMS & DISPLAY BOARD DECORATION COMPETITIONS) ORGANISED BY CULTURAL AND LITERARY CLUB" },
        { date: "18/8/2026", desc: "PAINTING COMPETITION ON ELECTRICITY AND ENERGY CONSERVATION ORGANISED BY CULTURAL AND LITARARY CLIB" },
        { date: "26/8/2026", desc: "HOLIDAY ON ACCOUNT OF BARAWAFAT" },
        { date: "28/8/2026", desc: "HOLIDAY ON ACCOUNT OF RAKSHA BANDHAN" },
        { date: "29/8/2026", desc: "SPECIAL ASSEMBLY OF DHYAN CHAND'S BIRTHDAY AS SPORTS DAY ORGANISED BY HEALTH AND WELLNESS CLUB" }
      ]
    },
    {
      month: "SEPTEMBER ( SOFT SKILLS DEVELOPMENT )",
      key: "SEPTEMBER",
      events: [
        { date: "2/9/2026 TO 13/9/2026", desc: "CLEANLINESS DRIVE FOR SWACHH BHARAT ORGANISED BY ECO CLUB" },
        { date: "03-09-2026", desc: "PARENT TEACHER MEETING" },
        { date: "04-09-2026", desc: "2026 HOLIDAY ON ACCOUNT OF KRISHNA JANMASHTMI" },
        { date: "05-09-2026", desc: "SPELL BEE COMPETITION FOR I TO V AND TEACHER'S DAY CELEBRATION" },
        { date: "14/9/2026", desc: "CELEBRATION OF HINDI WEEK ORGANISED BY CULTURAL AND LITERARY CLUB" },
        { date: "TENTATIVE ( 3RD WEEK TO 4TH WEEK)", desc: "HALF YEARLY EXAMS ( NUR TO GR 10) SECOND SERIES OF THE YEAR 2026-2027" }
      ]
    },
    {
      month: "OCTOBER ( FOCUSSING ON FAMILY ROOTS )",
      key: "OCTOBER",
      events: [
        { date: "02-10-2026", desc: "CELEBRATION OF MAHATMA GANDHI JAYANTI & LAL BAHADUR SHASTRI JAYANTI" },
        { date: "03-10-2026", desc: "INTERACTION WITH PARENTS - AN UPDATE ON STUDENT'S PROGRESS -( HALF YEARLY PERFORMANCES )" },
        { date: "04-10-2026", desc: "SLOGAN WRITING COMPETITION ON NON —VIOLENCE & BROTHERHOOD (ALL CLASSES HOUSE WISE) ORGANISED BY HEALTH AND WELLNESS CLUB" },
        { date: "19/10/2026 TO 20/10/2026", desc: "DUSSEHRA HOLIDAYS" },
        { date: "29/10/2026", desc: "CELEBRATION OF RASHTRIYA EKTA DIWAS ON BIRTH ANNIVERSARY OF SARDAR VALLABH BHAI PATEL (COLLAGE COMPETITION ON UNITY IS STRENGTH, DIYA MAKING AND RANGOLI MAKING COMPETITION ORGANISED BY HERITAGE AND TOURISM CLUB)" }
      ]
    },
    {
      month: "NOVEMBER ( EXPERIENTIAL & INNOVATION )",
      key: "NOVEMBER",
      events: [
        { date: "03-11-2026", desc: "INTERACTION WITH PARENTS- AN UPDATE ON STUDENTS PROGRESS" },
        { date: "FIRST WEEK OF NOVEMBER 2026", desc: "CELEBRATION OF VIGILANCE AWARENESS WEEK & CO- SCHOLASTIC ACTIVITIES ORGANISED BY ECO CLUB" },
        { date: "SECOND WEEK OF NOVEMBER 2026", desc: "PERIODIC ASSESSMENT - 3" },
        { date: "8/11/2026 TO 11/11/2026", desc: "DEEPAWALI HOLIDAYS" },
        { date: "14/11/2026", desc: "2026 SPORTS' ACTIVITIES ON CHILDREN’ S DAY" },
        { date: "16/11/2026", desc: "CELEBRATION OF NATIONAL EDUCATION DAY & SEWA ACTIVITIES (FOCUS ON DISASTER MANAGEMENT) ORGANISED BY ECO CLUB" },
        { date: "24/11/2026", desc: "HOLIDAY ON ACCOUNT OF GURU NANAK JAYANTI / GURU TEG BAHADUR (SHAHEED DIWAS)" },
        { date: "LAST WEEK OF NOVEMBER 2026", desc: "ART & CRAFT /SCIENCE EXHIBITION — TALENT SHOW (INDIVIDUAL & TEAM PERFORMANCE ORGANISED BY ECO CLUB" }
      ]
    },
    {
      month: "DECEMBER ( WINTER MAGIC & CAREER AWRENESS )",
      key: "DECEMBER",
      events: [
        { date: "FIRST WEEK OF DECEMBER 2026", desc: "FIRST PRE- BOARD EXAMINATION X & XII" },
        { date: "12-03-2026", desc: "PARENTS - TEACHER MEETING" },
        { date: "13/12/2026", desc: "COMPETITION ON SAVE WATER SAVE EARTH ORGANISED BY ECO CLUB" },
        { date: "15/12/2026", desc: "SALAD DRESSING (THEME BASED COMPETITION) UNDER ART INTEGRATION" },
        { date: "24/12/2026", desc: "SPECIAL ASSEMBLY CHRISTMAS DAY CELEBRATION" },
        { date: "25/12/2026", desc: "HOLIDAY ON ACCOUNT CHRISTMAS" }
      ]
    },
    {
      month: "JANUARY ( NATION PRIDE & CAREER ARENESS )",
      key: "JANUARY",
      events: [
        { date: "01-12-2027", desc: "NATIONAL YOUTH DAY/ SWAMI VIVEKANANAD JAYANTI (DEBATE : ON ROLE OF YOUTH IN NATION BUILDING ORGANISED LITERARY CLUB ORGANISED BY CULTURAL AND LITERARY CLUB)" },
        { date: "SECOND WEEK OF JANUARY 2027", desc: "SECOND PRE- BOARD EXAMINATION / PERIODIC ASSESSMENT - 4" },
        { date: "23/1/2027", desc: "CELEBRATION OF SUBHASH CHANDRA BOSE JAYANTI" },
        { date: "26/1/2026", desc: "CELEBRATION OF REPUBLIC DAY THROUGH CULTURAL PROGRAMS, SPEECHES, SKITS, PATRIOTIC SONGS AND DANCES BY CULTURAL AND LITERARY CLUB" },
        { date: "30/1/2027", desc: "REMEMBRANCE OF MARTYR'S DAY" }
      ]
    },
    {
      month: "FEBRUARY ( TECHNOLOGY INTEGRATION )",
      key: "FEBRUARY",
      events: [
        { date: "02-03-2027", desc: "PARENTS - TEACHER MEETING" },
        { date: "SECOND WEEK OF FEBRUARY 2027", desc: "ASSESSIMENT OF SUBJECT ENRICHMENT ACTIVITIES AND NOTEBOOKS" },
        { date: "23/2/2027", desc: "SLOGAN WRITING COMPETITION ON MATRIBHASHA DIWAS ORGANISED BY CULTURAL AND LITERARY CLUB" },
        { date: "LAST WEEK OF FEBRUARY 2027", desc: "ANNUAL EXAMINATION" }
      ]
    },
    {
      month: "MARCH ( FINAL REFLECTION & EVALUATION )",
      key: "MARCH",
      events: [
        { date: "03-03-2027", desc: "CONTINUATION OF ANNUAL EXAM" },
        { date: "03-06-2027", desc: "HOLIDAY ON ACCOUNT OF MAHASHIVRATRI" },
        { date: "18/3/2027", desc: "SESSION ENDING , DECLARATION OF RESULTS." },
        { date: "21/3/2027 TO 23/3/2027", desc: "HOLI HOLIDAYS" },
        { date: "01-04-2027", desc: "NEW SESSION STARTS 2027-2028 ( APRIL 01) THURSDAY." }
      ]
    }
  ];

  const filteredMonths = selectedMonth === 'ALL' 
    ? monthlyActivities 
    : monthlyActivities.filter(m => m.key === selectedMonth);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Annual Activity Calendar' }]} />
      <PageHeader 
        title="ACADEMIC CALENDAR FOR THE SESSION 2026-2027" 
        subtitle="SUNFLOWER PUBLIC SCHOOL ALLORA ENCLAVE DAYALBAGH"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* Month Filter Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-[#10457B] font-bold text-sm mr-2">
            <Filter className="w-4 h-4 text-[#E9931C]" />
            <span>Filter by Month:</span>
          </div>
          <button
            onClick={() => setSelectedMonth('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedMonth === 'ALL'
                ? 'bg-[#10457B] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Months
          </button>
          {monthlyActivities.map((m) => (
            <button
              key={m.key}
              onClick={() => setSelectedMonth(m.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMonth === m.key
                  ? 'bg-[#E9931C] text-[#10457B] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {m.key}
            </button>
          ))}
        </div>

        {/* Timeline / Cards of Activities */}
        <div className="space-y-8">
          {filteredMonths.map((monthGroup, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
                <Calendar className="w-6 h-6 text-[#E9931C]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">
                  {monthGroup.month}
                </h2>
              </div>

              <div className="space-y-4">
                {monthGroup.events.map((evt, eIdx) => (
                  <div key={eIdx} className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
                    <div className="bg-[#10457B] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono shrink-0 shadow-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E9931C]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium">
                      {evt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download Link */}
        <div>
          <h3 className="text-xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            DOWNLOADABLE ACADEMIC CALENDAR
          </h3>
          <div className="max-w-md">
            <DocumentCard 
              title="Annual Academic Calendar 2026-27 (PDF)" 
              docUrl="https://sunfloweragra.com/docs/ANNUAL%20ACTIVITY%20CALENDAR%20202627.pdf" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
