"use client";

import Link from "next/link";
import { PlayCircle, Clock, Map, Zap, Target } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome back, {user?.displayName || "Student"}!</h1>
        <p className="text-slate-600">Ready to continue your learning journey?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm col-span-1 md:col-span-2">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            Continue Learning
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-48 aspect-video bg-slate-100 rounded-xl flex-shrink-0 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-50"></div>
              <PlayCircle className="w-10 h-10 text-white z-10 drop-shadow-md" />
            </div>
            <div className="flex-1 w-full">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1 block">Web Development</span>
              <h3 className="font-bold text-slate-900 mb-2">Web Development Full Course</h3>
              <p className="text-sm text-slate-500 mb-4">Module 3: Advanced JavaScript • Lesson 4: Closures</p>
              
              <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-slate-500">35% Complete</span>
                <Link href="/lesson/l3" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Resume Course &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-sm text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Map className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-bold mb-2">AI Career Roadmap</h2>
              <p className="text-slate-300 text-sm mb-4">
                Generate a personalized learning path based on your goals using AI.
              </p>
            </div>
            <button className="bg-white text-slate-900 text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors w-full flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              Generate Roadmap
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-slate-900">Enrolled Courses</h2>
            <Link href="/dashboard/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</Link>
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Course Title {i}</h3>
                  <p className="text-xs text-slate-500 mb-3">12 / 45 Lessons completed</p>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${i * 20 + 10}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Workshops</h2>
            <Link href="/workshops" className="text-sm font-medium text-blue-600 hover:text-blue-700">Explore</Link>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-md border border-green-100">Live Free</span>
                <span className="text-sm font-medium text-slate-500">Tomorrow, 7:00 PM</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Build a Portfolio with Next.js & Tailwind</h3>
              <p className="text-sm text-slate-600 mb-4">Join our live session to build your personal portfolio from scratch.</p>
              <button className="w-full py-2 bg-slate-50 text-slate-700 hover:bg-slate-100 font-semibold text-sm rounded-lg border border-slate-200 transition-colors">
                View Details
              </button>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-0.5">Daily Goal</h3>
                  <p className="text-xs text-slate-500">Watch 1 lesson today</p>
                </div>
              </div>
              <span className="text-sm font-bold text-blue-600">0/1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
