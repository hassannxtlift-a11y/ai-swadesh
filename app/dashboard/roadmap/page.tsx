"use client";

import { Map, Zap, Target, Star, ChevronRight } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Career Roadmap</h1>
            <p className="text-slate-400 text-lg">
              Get a personalized learning path powered by AI to reach your career goals faster.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Set Your Goal</h2>
          <p className="text-slate-500 mb-8">
            Tell us what you want to become, and we&apos;ll build the perfect roadmap for you.
          </p>
          
          <div className="space-y-4 text-left">
            <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-500 cursor-pointer transition-all hover:shadow-md group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Star className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Full Stack Developer</p>
                    <p className="text-xs text-slate-500">MERN Stack, Next.js, Deployment</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </div>
            </div>
          </div>

          <button className="w-full mt-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            Generate My Custom Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}
