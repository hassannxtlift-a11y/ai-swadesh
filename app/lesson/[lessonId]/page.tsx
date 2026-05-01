"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Menu, CheckCircle2, PlayCircle, MessageSquare } from "lucide-react";

export default function LessonPlayerPage({ params }: { params: { lessonId: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const lessons = [
    { id: "l1", title: "Introduction to the Course", duration: "10:25", completed: true, active: false },
    { id: "l2", title: "Setting up the Environment", duration: "15:40", completed: true, active: false },
    { id: "l3", title: "Core Concepts Explained", duration: "25:10", completed: false, active: true },
    { id: "l4", title: "Your First Project", duration: "45:00", completed: false, active: false },
    { id: "l5", title: "Advanced Techniques", duration: "30:15", completed: false, active: false },
  ];

  return (
    <div className="h-screen flex flex-col bg-slate-900 text-white overflow-hidden">
      {/* Top Navbar */}
      <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <ChevronLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>
          <h1 className="text-lg font-bold hidden sm:block truncate max-w-md">Course Title Example</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            AI Doubt Solver
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Video Player Placeholder */}
          <div className="w-full bg-black aspect-video relative flex items-center justify-center border-b border-slate-800">
            <div className="text-center">
              <PlayCircle className="w-20 h-20 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Video Player Placeholder</p>
              <p className="text-slate-600 text-sm mt-2">Lesson ID: {params.lessonId}</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto w-full p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Core Concepts Explained</h2>
                <p className="text-slate-400">Module 1 • Lesson 3</p>
              </div>
              <button className="bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Mark as Complete
              </button>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p>
                In this lesson, we cover the core concepts that form the foundation of our work. 
                Pay close attention to the theories discussed here as they will be applied in the upcoming projects.
              </p>
              <h3>Resources:</h3>
              <ul>
                <li><a href="#" className="text-blue-400 hover:text-blue-300">Presentation Slides (PDF)</a></li>
                <li><a href="#" className="text-blue-400 hover:text-blue-300">Cheat Sheet</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} flex-shrink-0 bg-slate-950 border-l border-slate-800 transition-all duration-300 overflow-hidden flex flex-col absolute right-0 h-[calc(100vh-4rem)] z-10 lg:relative lg:h-auto`}>
          <div className="p-4 border-b border-slate-800">
            <h3 className="font-bold text-lg mb-2">Course Content</h3>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-right">40% Complete</p>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 bg-slate-900 border-b border-slate-800">
              <h4 className="font-semibold text-sm text-slate-300">Module 1: Getting Started</h4>
            </div>
            <div className="flex flex-col">
              {lessons.map((lesson) => (
                <button 
                  key={lesson.id}
                  className={`w-full text-left p-4 border-b border-slate-800/50 hover:bg-slate-800 transition-colors flex items-start gap-3 ${lesson.active ? 'bg-slate-800 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
                >
                  <div className="mt-0.5">
                    {lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 ${lesson.active ? 'border-blue-500' : 'border-slate-600'}`}></div>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-medium leading-tight ${lesson.active ? 'text-white' : 'text-slate-300'}`}>
                      {lesson.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <PlayCircle className="w-3 h-3" /> {lesson.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
