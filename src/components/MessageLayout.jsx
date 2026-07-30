import React from 'react';
import Breadcrumb from './Breadcrumb';
import PageHeader from './PageHeader';
import { User, Clock } from 'lucide-react';

export default function MessageLayout({
  breadcrumbItems,
  headerTitle,
  headerSubtitle,
  profileImage,
  name,
  roleName,
  title,
  designation,
  roleTitle,
  badgeText = "Message from Desk",
  messageTitle,
  paragraphs,
  signoffName,
  signoffTitle,
  children
}) {
  // Robust Fallbacks to prevent any 'undefined' rendering bug
  const safeName = name || roleName || "Director";
  const safeDesignation = title || designation || roleTitle || "Director";
  const safeSignoffName = signoffName || safeName;
  const safeSignoffTitle = signoffTitle || `(${safeDesignation})`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumb & Header */}
      {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
      <PageHeader 
        title={headerTitle || `${safeDesignation}'s Message`} 
        subtitle={headerSubtitle || `${safeName} — ${safeDesignation}, Sun Flower Public School`}
      />

      {/* Main Container - Responsive Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Profile Card (Fixed 320px - 360px on Desktop) */}
          <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
              
              {/* Badge Inside Profile Card (Never Overlaps) */}
              <div className="mb-4 inline-flex items-center gap-1.5 bg-amber-50 text-[#E9931C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200/60">
                <Clock className="w-3.5 h-3.5" />
                <span>{badgeText}</span>
              </div>

              {/* Photo or Placeholder Container */}
              <div className="w-48 h-56 sm:w-52 sm:h-60 rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-slate-400 mb-5 shadow-inner relative overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt={safeName} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <User className="w-16 h-16 text-slate-300 mb-3" />
                    <p className="text-xs font-medium text-slate-500 leading-tight">
                      Official photograph will be provided by the school administration.
                    </p>
                  </>
                )}
              </div>

              {/* Profile Name & Designation */}
              <div className="w-full">
                <h4 className="text-lg font-bold text-[#10457B] leading-snug">
                  {safeName}
                </h4>
                <p className="text-xs font-bold text-[#E9931C] uppercase tracking-wider mt-1">
                  {safeDesignation}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="flex-1 min-w-0 w-full bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6">
            {/* Message Title & Clean Divider */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10457B] tracking-tight">
                {messageTitle || `${safeDesignation.toUpperCase()}'S MESSAGE`}
              </h2>
              <div className="h-1 w-16 bg-[#E9931C] rounded-full mt-3"></div>
            </div>

            {/* Paragraphs Content */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              {paragraphs && paragraphs.length > 0 ? (
                paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                children
              )}
            </div>

            {/* Sign-off Details */}
            {(safeSignoffName || safeSignoffTitle) && (
              <div className="pt-6 border-t border-slate-100 font-bold text-[#10457B]">
                <p className="text-lg sm:text-xl">{safeSignoffName}</p>
                <p className="text-slate-500 text-sm sm:text-base font-normal">{safeSignoffTitle}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
