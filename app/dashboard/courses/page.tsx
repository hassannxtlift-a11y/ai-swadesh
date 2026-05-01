"use client";

import { PlayCircle, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

export default function MyCoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">My Courses</h1>
        <p className="text-slate-600">Continue where you left off and master new skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1].map((i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="aspect-video bg-slate-100 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
               <PlayCircle className="w-12 h-12 text-blue-600/20" />
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Web Development</span>
              <h3 className="font-bold text-slate-900 mt-1 mb-4">Web Development Full Course</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>Progress</span>
                  <span>35%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> 12/45 Lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 4h left
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-100">
                Resume Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
