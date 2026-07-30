import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with Sun Flower Public School, Dayalbagh, Agra"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 text-[#E9931C] rounded-2xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#10457B] mb-2">School Address</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              ALLORA ENCLAVE, DAYALBAGH<br />
              AGRA (UTTAR PRADESH) - 282005
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-50 text-[#10457B] rounded-2xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#10457B] mb-2">Phone / Mobile</h3>
            <p className="text-slate-700 font-semibold text-lg">
              +91-8899659410
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 text-[#E9931C] rounded-2xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#10457B] mb-2">Email Address</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              60520@cbseshiksha.in<br />
              info@sunfloweragra.com<br />
              sfps.agra@gmail.com
            </p>
          </div>
        </div>

        {/* Working Hours & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office Hours */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#E9931C]" />
              <h3 className="text-xl font-bold text-[#10457B]">School & Office Timings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Monday - Saturday</span>
                <span className="bg-slate-100 text-[#10457B] text-xs font-bold px-3 py-1 rounded-full">
                  9:00 A.M. - 02:00 P.M.
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-slate-700">Sunday</span>
                <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                  Closed
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-[#10457B] mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-1">Message Sent Successfully!</h4>
                <p className="text-sm">Thank you for reaching out to Sun Flower Public School. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B]"
                      placeholder="Enter full name"
                      value={formData.fname}
                      onChange={(e) => setFormData({...formData, fname: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B]"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B]"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B]"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B]"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-[#10457B] hover:bg-[#0c3763] text-white font-bold px-8 py-3.5 rounded-xl transition flex items-center gap-2 shadow-md"
                >
                  <Send className="w-5 h-5" /> Submit Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map Location */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 overflow-hidden">
          <h3 className="text-xl font-bold text-[#10457B] p-4">School Location Map</h3>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6207475932124!2d78.0085196!3d27.2310545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974797f074ee057%3A0x171f8e944b7f9907!2sSunflower%20Public%20School!5e0!3m2!1sen!2sin!4v1776406197666!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunflower Public School Location"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
