"use client";

import { Award, Download, ShieldCheck } from "lucide-react";

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">My Certificates</h1>
        <p className="text-slate-600">Your achievements and recognized certifications.</p>
      </div>

      <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-sm text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">No certificates yet</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Complete a course to earn a verified certificate. Showcase your skills to recruiters and peers.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-100">
            Start Learning
          </button>
        </div>
      </div>
      
      {/* Sample Certificate Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-40 grayscale pointer-events-none">
         <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
               <ShieldCheck className="w-6 h-6 text-slate-400" />
             </div>
             <div>
               <p className="font-bold text-slate-800">Advanced React Patterns</p>
               <p className="text-xs text-slate-400">Locked • Complete course to unlock</p>
             </div>
           </div>
           <Download className="w-5 h-5 text-slate-300" />
         </div>
      </div>
    </div>
  );
}
