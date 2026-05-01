"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCard } from "@/components/home/FeatureCard";
import { CourseCard } from "@/components/courses/CourseCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { dummyCourses } from "@/data/dummyCourses";
import { categories } from "@/data/dummyCategories";
import { BookOpen, Award, Layers, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multiple Skills",
      description: "Access courses across 20+ different categories and technologies."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Track Learning",
      description: "Industry-aligned curriculum designed to get you job-ready in months."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Project-Based",
      description: "Build real-world projects that you can actually show to recruiters."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificates",
      description: "Earn recognized certificates upon completion of each course."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Feature Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <FeatureCard 
                  key={idx} 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Popular Courses</h2>
                <p className="text-slate-600 max-w-2xl">Start with our most trending courses and kickstart your career in tech.</p>
              </div>
              <Link href="/courses" className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group">
                View all courses
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyCourses.slice(0, 3).map((course, idx) => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  slug={course.slug}
                  title={course.title}
                  thumbnailUrl={course.thumbnailUrl}
                  category={course.category}
                  rating={course.rating}
                  studentsCount={course.studentsCount}
                  price={course.price}
                  discountPrice={course.discountPrice}
                  duration={course.duration}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Explore by Categories</h2>
              <p className="text-slate-400">Discover your passion across our diverse range of subjects.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={`/courses?category=${cat.name}`}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl text-center transition-all group"
                >
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <p className="text-sm font-semibold">{cat.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative mb-12 lg:mb-0">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden relative">
                   {/* Decorative elements */}
                   <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
                   <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="w-full h-full border-4 border-white rounded-2xl shadow-inner bg-white/40 backdrop-blur-sm"></div>
                   </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                  <p className="text-3xl font-bold text-blue-600 mb-1">10k+</p>
                  <p className="text-sm font-medium text-slate-500">Students trust us for their career growth</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Why students choose <span className="text-blue-600">AI Swadesh</span> for their learning journey
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Expert Instructors", desc: "Learn from people who have actually built what they are teaching." },
                    { title: "Lifetime Access", desc: "Once you buy a course, it's yours forever. No subscriptions." },
                    { title: "AI-Powered Guidance", desc: "Our unique AI Career Roadmap helps you stay on the right path." },
                    { title: "Industry Recognition", desc: "Our certificates are valued by top Indian tech companies." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link href="/about" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-colors">
                    Learn more about our mission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to transform your career?</h2>
              <p className="text-blue-100 mb-10 text-lg">Join AI Swadesh today and get access to high-quality education at the most affordable prices in India.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors">
                    Get Started Now
                 </Link>
                 <Link href="/courses" className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors border border-blue-500">
                    Browse Courses
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
