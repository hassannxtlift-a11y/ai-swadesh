"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/courses/CourseCard";
import { useFirestore } from "@/hooks/useFirestore";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

export default function CoursesPage() {
  const { data: courses, loading, error } = useFirestore("courses");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => 
    course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">All Courses</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Browse our complete catalog of premium courses and start learning today.
          </p>
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by course name, category or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-3.5 border-0 rounded-full leading-5 bg-white/10 backdrop-blur border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm transition-all"
            />
          </div>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {["All", "Digital Marketing", "Web Development", "AI Tools", "Graphic Design"].map((cat, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-slate-300" />
                      <span className="text-slate-600 text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-slate-600 text-sm">
                  {loading ? "Loading..." : `Showing ${filteredCourses.length} results`}
                </p>
                <select className="border-slate-200 border rounded-lg text-sm py-2 px-3 text-slate-700 bg-white outline-none focus:border-blue-500">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                </select>
              </div>
              
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                  <p className="text-slate-500 font-medium">Fetching courses from database...</p>
                </div>
              ) : error ? (
                <div className="text-center py-20">
                  <p className="text-red-500 font-bold text-xl mb-2">Error connecting to database</p>
                  <p className="text-slate-500">Please check your Firebase configuration and rules.</p>
                </div>
              ) : filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, idx) => (
                    <CourseCard key={course.id} {...(course as any)} delay={idx * 0.1} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                   <p className="text-slate-500">No courses found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
