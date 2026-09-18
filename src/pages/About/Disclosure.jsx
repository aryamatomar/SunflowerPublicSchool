import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Building2, UserCheck, BarChart3, ShieldAlert, Search, Users, Phone, Mail } from 'lucide-react';

export default function Disclosure() {
  const [teacherSearch, setTeacherSearch] = useState('');

  const documents = [
    { title: "Copies of Affiliation / Upgradation Letter / Extension Letter", docUrl: "https://sunfloweragra.com/docs/1-GENERAL%20AFFILIATION%20DOCS.pdf" },
    { title: "Copies of Society / Trust / Company Registration", docUrl: "https://sunfloweragra.com/docs/2-SOCIETY%20TRUST%20DOCS.jpg" },
    { title: "Copy of No Objection Certificate (NOC)", docUrl: "https://sunfloweragra.com/docs/3-NOC%20(1).pdf" },
    { title: "Copies of Recognition Certificate Under RTE Act 2009", docUrl: "https://sunfloweragra.com/docs/4-RTE%20DOCS.jpeg" },
    { title: "Copy of Building Safety Certificate", docUrl: "https://sunfloweragra.com/docs/5-BUILDING%20SAFETY.pdf" },
    { title: "Copy of Fire Safety Certificate", docUrl: "https://sunfloweragra.com/docs/6-FIRE%20AND%20LIFE%20SAFETY%20DOCS.pdf" },
    { title: "Copy of Health Sanitation Certificate", docUrl: "https://sunfloweragra.com/docs/copy-health-sanitation.jpg" },
    { title: "Copy of Self Certification by School", docUrl: "https://sunfloweragra.com/docs/copy-self-declaration.pdf" },
    { title: "Copies of Water and Sanitation Certificates", docUrl: "https://sunfloweragra.com/docs/copy-water-sanitation.pdf" },
    { title: "Faculty Details", docUrl: "https://sunfloweragra.com/docs/Faculty-Details.pdf" },
    { title: "List of School Management Committee (SMC)", docUrl: "/docs/SCHOOL_COMMITTEE_MEMBERS.png" },
    { title: "List of Parent Teachers Associations (PTA)", docUrl: "/docs/PARENTS_TEACHER_ASSOCIATION.png" },
    { title: "Annual Academic Calendar 2026-27", docUrl: "https://sunfloweragra.com/docs/ANNUAL%20ACTIVITY%20CALENDAR%20202627.pdf" }
  ];

  const resultsData = [
    { year: "2026", registered: "82-", passed: "80", percentage: "99.2 %" },
    { year: "2025", registered: "74", passed: "74", percentage: "100%" },
    { year: "2024", registered: "70", passed: "65", percentage: "96%" }
  ];

  const teachersList = [
    { regNo: "T26003446458", teacherId: "3446458", name: "MANJARI YADAV", designation: "TGT", doj: "09-09-2026 00:00", qualification: "B.ED", phone: "9456253342", dob: "06-07-1988", gender: "F", email: "manjaricool.yadav@gmail.com" },
    { regNo: "T26003435564", teacherId: "3435564", name: "ARPITA GARG", designation: "TGT", doj: "04-01-2026 00:00", qualification: "D.EL.ED.", phone: "9528820502", dob: "27/12/2003", gender: "F", email: "arpitaa.garg@gmail.com" },
    { regNo: "T26003435503", teacherId: "3435503", name: "MENIKA SINGH", designation: "PTI", doj: "04-06-2026 00:00", qualification: "B.PED", phone: "9336106797", dob: "10-07-2000", gender: "F", email: "menikathakur12@gmail.com" },
    { regNo: "T26003432672", teacherId: "3432672", name: "YAGYESH NATH VYAS", designation: "TGT", doj: "08-08-2026 00:00", qualification: "B.ED", phone: "8445427841", dob: "27/09/1990", gender: "M", email: "yagyesh27sep@gmail.com" },
    { regNo: "T26003432587", teacherId: "3432587", name: "RUPALI KAKKAR", designation: "TGT", doj: "07-05-2026 00:00", qualification: "B.ED", phone: "9870846126", dob: "14/01/1980", gender: "F", email: "rupalikakkar35@gmail.com" },
    { regNo: "T26003432551", teacherId: "3432551", name: "AJITA BARNWAL", designation: "TGT", doj: "04-01-2026 00:00", qualification: "B.ED", phone: "8318875813", dob: "28/09/1990", gender: "F", email: "awesomeajita.lifea5@gmail.com" },
    { regNo: "T26003432524", teacherId: "3432524", name: "MANJULA VERMA", designation: "TGT", doj: "06-27-2026 00:00", qualification: "B.ED", phone: "9058135984", dob: "16/01/1986", gender: "F", email: "manjulaverma1986@gmail.com" },
    { regNo: "T26003319942", teacherId: "3319942", name: "NEELAM SHARMA", designation: "CAREER COUNSELOR", doj: "03-16-2026 00:00", qualification: "B.Ed.", phone: "8126543756", dob: "02-06-1967", gender: "F", email: "heartysmile14@gmail.com" },
    { regNo: "T25003200478", teacherId: "3200478", name: "JASMINE LAKHWANI", designation: "TGT", doj: "10-09-2025 00:00", qualification: "B. Ed", phone: "9068453738", dob: "16/09/2002", gender: "F", email: "jasminlakhwani09@gmail.com" },
    { regNo: "T25003158564", teacherId: "3158564", name: "PUSHPENDRA PAL BAGHEL", designation: "OTHER", doj: "07-10-2024 00:00", qualification: "DANCE: PRABHAKAR", phone: "9068005611", dob: "03-08-1996", gender: "M", email: "bhagelpushpendar0@gmail.com" },
    { regNo: "T25003156878", teacherId: "3156878", name: "NUPUR DUBEY PARMAR", designation: "PRT", doj: "02-19-2024 00:00", qualification: "B.Ed.", phone: "9927188588", dob: "21/09/1987", gender: "F", email: "dubeynupur7@gmail.com" },
    { regNo: "T25003156853", teacherId: "3156853", name: "POOJA SHARMA", designation: "NTT", doj: "04-01-2025 00:00", qualification: "B.Ed.", phone: "9811784426", dob: "27/07/1992", gender: "F", email: "poojakusum1992@gmail.com" },
    { regNo: "T25003148750", teacherId: "3148750", name: "VIVEK YADAV", designation: "OTHER", doj: "04-02-2024 00:00", qualification: "MCSE", phone: "7417510123", dob: "18/09/1989", gender: "M", email: "vky5849@gmail.com" },
    { regNo: "T25003122641", teacherId: "3122641", name: "NIKITA TOMAR", designation: "PRT", doj: "04-01-2025 00:00", qualification: "B.Ed.", phone: "8923827756", dob: "07-12-1984", gender: "F", email: "nt629440@gmail.com" },
    { regNo: "T25003121293", teacherId: "3121293", name: "PREETI SINGH", designation: "PRT", doj: "07-05-2022 00:00", qualification: "B.Ed.", phone: "8868874767", dob: "25/08/1981", gender: "F", email: "preetisingh2722@gmail.com" },
    { regNo: "T25003112964", teacherId: "3112964", name: "BHARTI SACHDEVA BISHT", designation: "PRT", doj: "11-16-2023 00:00", qualification: "B.Ed.", phone: "7060856416", dob: "16/01/1992", gender: "F", email: "rs.bhartipaavn2018@gmail.com" },
    { regNo: "T25003108928", teacherId: "3108928", name: "ASTUTI", designation: "TGT", doj: "07-02-2025 00:00", qualification: "MFA", phone: "7060606167", dob: "17/10/2000", gender: "F", email: "yadavastuti5@gmail.com" },
    { regNo: "T25003086390", teacherId: "3086390", name: "SWATI SINHA", designation: "TGT", doj: "09-09-2024 00:00", qualification: "B. Ed", phone: "9389235654", dob: "23/05/1983", gender: "F", email: "swatisinhaa1983@gmail.com" },
    { regNo: "T25003086299", teacherId: "3086299", name: "KRISHNA", designation: "TGT", doj: "04-01-2025 00:00", qualification: "Ph.D", phone: "9012649308", dob: "09-05-1991", gender: "F", email: "krishnamathuria007@gmail.com" },
    { regNo: "T25003068615", teacherId: "3068615", name: "JYOTI JAIN", designation: "NTT", doj: "10-17-2022 00:00", qualification: "B. Ed", phone: "9634596170", dob: "11-12-1980", gender: "F", email: "jyotijain11121980@gmail.com" },
    { regNo: "T25003068572", teacherId: "3068572", name: "SAPNA KAKKAR", designation: "NTT", doj: "04-01-2024 00:00", qualification: "B. Ed", phone: "9897956817", dob: "17/08/1979", gender: "F", email: "sapnakakkar17@gmail.com" },
    { regNo: "T24002827418", teacherId: "2827418", name: "VIKRAM SINGH", designation: "TGT", doj: "04-01-2024 00:00", qualification: "DIPLOMA IN ELECTRONICS & B.Tech", phone: "8979738983", dob: "04-10-1990", gender: "F", email: "vikram30.tc.dei@gmail.com" },
    { regNo: "T24002827368", teacherId: "2827368", name: "AMITA SINGH", designation: "TGT", doj: "04-01-2024 00:00", qualification: "B. Ed", phone: "7017531399", dob: "01-10-1992", gender: "F", email: "singhamita713@gmail.com" },
    { regNo: "T23002475617", teacherId: "2475617", name: "DEEPTI SAXENA", designation: "TGT", doj: "08-21-2025 00:00", qualification: "B.Ed.", phone: "7906179826", dob: "15/07/1986", gender: "F", email: "deeptisaxena9410@gmail.com" },
    { regNo: "T23002157345", teacherId: "2157345", name: "Dr. SHUBHI DAYAL", designation: "PRINCIPAL", doj: "2008", qualification: "M.Ed, Ph.D", phone: "9897081051", dob: "15/08/1979", gender: "F", email: "sfps.agra@gmail.com" },
    { regNo: "T22001973784", teacherId: "1973784", name: "Shivam Srivastava", designation: "TGT", doj: "07-14-2022 00:00", qualification: "D.El.Ed", phone: "7037609073", dob: "03-02-1996", gender: "M", email: "shrivastavashivamfet@gmail.com" },
    { regNo: "T22001713328", teacherId: "1713328", name: "AVINASH KUMAR SRIVASTAVA", designation: "OTHER", doj: "2018", qualification: "DIPL. BUSINESS MANAGEMENT", phone: "9927452868", dob: "19/10/1970", gender: "M", email: "avinks41@gmail.co" },
    { regNo: "T22001711764", teacherId: "1711764", name: "TRIVENI", designation: "PRT", doj: "04-01-2017 00:00", qualification: "B.Ed.", phone: "7011406714", dob: "09-07-1978", gender: "F", email: "tshrivastava001@gmail.com" },
    { regNo: "T22001711737", teacherId: "1711737", name: "SHIPRA JAIN", designation: "PRT", doj: "2014", qualification: "B.Ed.", phone: "9897753803", dob: "06-06-1981", gender: "F", email: "shiprajain44@gmail.com" },
    { regNo: "T22001711688", teacherId: "1711688", name: "SUSHMA RAJPUT", designation: "PRT", doj: "2012", qualification: "B.Ed.", phone: "7906808119", dob: "25/07/1983", gender: "F", email: "sushmarajput25783@gmail.com" },
    { regNo: "T22001711648", teacherId: "1711648", name: "SHAGUFTA KHAN", designation: "TGT", doj: "04-01-2017 00:00", qualification: "B.Ed.", phone: "9058696772", dob: "18/01/1978", gender: "F", email: "bloomingrose143.sk@gmail.com" },
    { regNo: "T22001711469", teacherId: "1711469", name: "PAYAL KHATRI", designation: "TGT", doj: "04-01-2008 00:00", qualification: "B.Ed.", phone: "8923171788", dob: "31/08/1981", gender: "F", email: "payalpk3108@gmail.com" },
    { regNo: "T22001711417", teacherId: "1711417", name: "KARUNA KULSHRESTHA", designation: "LIBRARIAN", doj: "04-01-2008 00:00", qualification: "B.LIB", phone: "7351533684", dob: "24/02/1976", gender: "F", email: "karuna.xiaomi@gmail.com" },
    { regNo: "T22001711339", teacherId: "1711339", name: "PRIYANKA KHANDELWAL", designation: "TGT", doj: "2011", qualification: "B.Ed.", phone: "8077973899", dob: "26/01/1986", gender: "F", email: "priyankakhandelwal93198@gmail.com" },
    { regNo: "T22001711288", teacherId: "1711288", name: "SNEHA AGARWAL", designation: "TGT", doj: "09-06-2014 00:00", qualification: "B.Ed.", phone: "9568028972", dob: "05-11-1987", gender: "F", email: "sony051187@gmail.com" },
    { regNo: "T22001711233", teacherId: "1711233", name: "POOJA CHHABRA", designation: "TGT", doj: "04-01-2014 00:00", qualification: "B.Ed.", phone: "8171543273", dob: "29/06/1981", gender: "F", email: "amitchhabraagra@gmail.com" },
    { regNo: "T22001711091", teacherId: "1711091", name: "BABITA PRINJA", designation: "TGT", doj: "07-15-2008 00:00", qualification: "B. Ed", phone: "9760509602", dob: "13/02/1973", gender: "F", email: "babitaprinja@gmail.com" },
    { regNo: "T22001708256", teacherId: "1708256", name: "VANDANA SHARMA", designation: "PRT", doj: "2010", qualification: "B.Ed.", phone: "9997470567", dob: "01-02-1971", gender: "F", email: "vandana99974@gmail.com" },
    { regNo: "T22001260400", teacherId: "1260400", name: "ALIKA SINHA", designation: "TGT", doj: "08-01-2019 00:00", qualification: "B.Ed", phone: "9208732065", dob: "22/06/1984", gender: "F", email: "alika.prem@gmail.com" },
    { regNo: "T22000136558", teacherId: "136558", name: "Dr. Rajni Pandey", designation: "TGT", doj: "04-01-2008 00:00", qualification: "B.Ed, P.hD", phone: "9897617727", dob: "02-02-1976", gender: "F", email: "rajnipandey1976@gmail.com" }
  ];

  const filteredTeachers = teachersList.filter(t => 
    t.name.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    t.designation.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    t.qualification.toLowerCase().includes(teacherSearch.toLowerCase()) ||
    t.regNo.toLowerCase().includes(teacherSearch.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Mandatory Disclosure' }, { label: 'General Information' }]} />
      <PageHeader 
        title="Mandatory Disclosure & Information" 
        subtitle="Public disclosures as required by CBSE guidelines and Central Board of Secondary Education"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* General Information Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">GENERAL INFORMATION</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/3">1). NAME OF THE SCHOOL</td>
                  <td className="py-3 text-slate-700">Sunflower Public School</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). AFFILIATION NO</td>
                  <td className="py-3 text-slate-700 font-mono font-semibold">2131168</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). SCHOOL CODE</td>
                  <td className="py-3 text-slate-700 font-mono font-semibold">60520</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">4). ADDRESS WITH PINCODE</td>
                  <td className="py-3 text-slate-700">Ellora Enclave Dayalbagh Agra - 282005</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">5). PRINCIPAL NAME & QUALIFICATION</td>
                  <td className="py-3 text-slate-700">Dr. Shubhi Dayal (M.Sc, M.Ed, PhD)</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">6). EMAIL ID</td>
                  <td className="py-3 text-slate-700">sfps.agra@gmail.com, animeshdayal77@gmail.com</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">7). PHONE / MOBILE</td>
                  <td className="py-3 text-slate-700">+91-8899659410</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Teaching Staff Summary Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">STAFF (TEACHING)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/2">1). PRINCIPAL</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). TOTAL NUMBER OF TEACHERS</td>
                  <td className="py-3 text-slate-700 font-bold">{teachersList.length}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). DETAILS OF SPECIAL SECTION EDUCATOR</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">4). DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Teachers List Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#E9931C]">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#E9931C]" />
              <div>
                <h2 className="text-2xl font-bold text-[#10457B]">TEACHERS DETAILS</h2>
                <span className="text-xs font-semibold text-slate-500">Official Staff Register & Qualifications ({teachersList.length} Teachers)</span>
              </div>
            </div>

            {/* Quick Filter Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={teacherSearch}
                onChange={(e) => setTeacherSearch(e.target.value)}
                placeholder="Search teacher by name or designation..."
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E9931C] bg-slate-50 text-slate-800"
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Registration No</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Teacher ID</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Name</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Designation</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Date Of Joining</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Qualification</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Phone Number</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Date Of Birth</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">Gender</th>
                  <th className="py-3.5 px-3 font-bold border-b border-slate-200 whitespace-nowrap">EMAIL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {filteredTeachers.map((teacher, idx) => (
                  <tr key={teacher.regNo} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-amber-50/40'}>
                    <td className="py-3 px-3 font-mono font-semibold text-slate-700 whitespace-nowrap">{teacher.regNo}</td>
                    <td className="py-3 px-3 font-mono text-slate-600 whitespace-nowrap">{teacher.teacherId}</td>
                    <td className="py-3 px-3 font-bold text-[#10457B] whitespace-nowrap">{teacher.name}</td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-amber-50 text-[#0B3560] border border-amber-200/60">
                        {teacher.designation}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600 whitespace-nowrap font-mono text-xs">{teacher.doj}</td>
                    <td className="py-3 px-3 font-semibold text-slate-700 whitespace-nowrap">{teacher.qualification}</td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <a href={`tel:${teacher.phone}`} className="text-[#10457B] hover:text-[#E9931C] font-mono font-medium">
                        {teacher.phone}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-slate-600 whitespace-nowrap font-mono text-xs">{teacher.dob}</td>
                    <td className="py-3 px-3 font-bold text-slate-700 text-center whitespace-nowrap">{teacher.gender}</td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <a href={`mailto:${teacher.email}`} className="text-blue-600 hover:text-blue-800 hover:underline text-xs">
                        {teacher.email}
                      </a>
                    </td>
                  </tr>
                ))}
                {filteredTeachers.length === 0 && (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-slate-500 font-semibold">
                      No teacher records found matching "{teacherSearch}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Infrastructure Information */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">INFRASTRUCTURE INFORMATION</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/2">1). TOTAL CAMPUS AREA OF THE SCHOOL</td>
                  <td className="py-3 text-slate-700">6688 sq. mt.</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). NO AND SIZE OF THE CLASS ROOMS</td>
                  <td className="py-3 text-slate-700">25x20 sq. mt.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). NO AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS</td>
                  <td className="py-3 text-slate-700">3 Laboratories</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">4). INTERNET FACILITY</td>
                  <td className="py-3 text-emerald-600 font-bold">Yes</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">5). NO OF GIRLS TOILETS</td>
                  <td className="py-3 text-slate-700 font-bold">14</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">6). NO OF BOYS TOILETS</td>
                  <td className="py-3 text-slate-700 font-bold">14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Board Examination Results Class X */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">LAST 3 YEARS RESULTS</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3 px-4 rounded-tl-lg">SR NO</th>
                  <th className="py-3 px-4">YEAR</th>
                  <th className="py-3 px-4">NO OF REGISTERED STUDENTS</th>
                  <th className="py-3 px-4">PASSED</th>
                  <th className="py-3 px-4 rounded-tr-lg">PERCENTAGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {resultsData.map((res, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-slate-50/50' : ''}>
                    <td className="py-3 px-4 font-bold text-[#10457B]">{i + 1}</td>
                    <td className="py-3 px-4 font-semibold">{res.year}</td>
                    <td className="py-3 px-4">{res.registered}</td>
                    <td className="py-3 px-4">{res.passed}</td>
                    <td className="py-3 px-4 font-bold text-emerald-600">{res.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mandatory Disclosure Documents Grid */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            MANDATORY DISCLOSURE DOCUMENTS & CERTIFICATES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} docUrl={doc.docUrl} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
