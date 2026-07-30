import React from 'react';
import { FileText, Eye, Download, Lock } from 'lucide-react';

export default function DocumentCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#10457B]/30 transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="p-3 bg-blue-50 text-[#10457B] rounded-xl group-hover:bg-[#10457B] group-hover:text-white transition-colors duration-200">
            <FileText className="w-6 h-6" />
          </div>
          <span className="bg-amber-50 text-[#E9931C] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-amber-200/60">
            PDF Document
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#10457B] font-poppins mb-2">
          📄 {title}
        </h3>

        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Content will be uploaded by the school administration.
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
        <button
          onClick={() => alert(`View placeholder for: ${title}`)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-[#10457B] text-[#10457B] hover:text-white text-xs font-bold rounded-xl transition-all duration-200"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View</span>
        </button>

        <button
          onClick={() => alert(`Download placeholder for: ${title}`)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#E9931C] hover:bg-amber-600 text-[#0B3560] text-xs font-bold rounded-xl transition-all duration-200 shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}
