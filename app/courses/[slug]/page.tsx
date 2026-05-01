"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { Star, Users, Clock, PlayCircle, CheckCircle, Shield, Award, Infinity, Play, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const q = query(collection(db, "courses"), where("slug", "==", params.slug), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setCourse({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        } else {
          setCourse(null);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return notFound();
  }

  const curriculum = [
    { title: "Module 1: Introduction", duration: "1h 30m", lessons: 4 },
    { title: "Module 2: Fundamentals", duration: "3h 15m", lessons: 8 },
    { title: "Module 3: Advanced Concepts", duration: "4h 45m", lessons: 10 },
    { title: "Module 4: Real-world Projects", duration: "2h 0m", lessons: 3 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Course Header */}
      <div className="bg-slate-900 text-white pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
                  {course.category || "Development"}
                </span>
                <span className="text-slate-400 text-sm">{course.level || "Beginner"}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-300">
                {course.description || "Master the latest technologies with our comprehensive and practical project-based course."}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-400">{course.rating || 5.0}</span>
                  <span className="text-slate-400">({(course.studentsCount / 10 || 50).toFixed(0)} ratings)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-5 h-5" />
                  <span>{Number(course.studentsCount || 0).toLocaleString()} students enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration || "10h 30m"}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg text-white">
                  {(course.instructor || "H").charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-slate-400">Created by</p>
                  <p className="font-semibold">{course.instructor || "Hassan"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-24 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What you&apos;ll learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">Master the core concepts of {(course.category || "Tech").toLowerCase()} and build practical projects.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
              <p className="text-slate-600 mb-6">{curriculum.length} modules • 24 lessons • {course.duration || "10h 30m"} total length</p>
              
              <div className="space-y-4">
                {curriculum.map((mod, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
                      <div className="font-bold text-slate-800">{mod.title}</div>
                      <div className="text-sm text-slate-500">{mod.lessons} lessons • {mod.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Instructor */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Instructor</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-3xl font-bold text-blue-600">
                  {(course.instructor || "H").charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{course.instructor || "Hassan"}</h3>
                  <p className="text-blue-600 font-medium mb-3">Senior Expert in {course.category || "Technology"}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    With years of industry experience, our instructors have taught thousands of students how to succeed in their careers. 
                    The teaching style is highly practical and project-based.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden sticky top-24">
              <div className="aspect-video relative bg-slate-900 flex items-center justify-center cursor-pointer group">
                {course.image ? (
                  <img src={course.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                ) : (
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-40"></div>
                )}
                <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform absolute z-10" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-slate-900">
                    {Number(course.price) === 0 ? "Free" : `₹${Number(course.price).toLocaleString()}`}
                  </span>
                  {course.oldPrice && (
                    <span className="text-lg text-slate-400 line-through mb-1">₹{Number(course.oldPrice).toLocaleString()}</span>
                  )}
                </div>
                
                <div className="space-y-3 mb-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-lg shadow-blue-200">
                    Buy Now
                  </button>
                  <button className="w-full bg-blue-50 text-blue-600 font-bold py-3.5 px-4 rounded-xl hover:bg-blue-100 transition-colors">
                    Add to Cart
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">This course includes:</p>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Play className="w-4 h-4" /> {course.duration || "10h 30m"} on-demand video
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Infinity className="w-4 h-4" /> Full lifetime access
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Award className="w-4 h-4" /> Certificate of completion
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Shield className="w-4 h-4" /> 7-Day Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
