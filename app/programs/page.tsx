"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Briefcase, Star, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Full Stack Development",
    duration: "6 Months",
    highlight: "Job Guarantee",
    description: "Master React, Node.js, and Cloud architectures to become a top 1% developer.",
    features: ["Industry Projects", "1-on-1 Mentorship", "Placement Support"],
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "AI & Data Science",
    duration: "8 Months",
    highlight: "Most Popular",
    description: "Dive deep into Machine Learning, Neural Networks, and Data Engineering.",
    features: ["GPU Access", "Research Papers", "Top-tier Instructors"],
    icon: <Star className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-50"
  },
  {
    title: "Product Management",
    duration: "4 Months",
    highlight: "Fast Track",
    description: "Bridge the gap between business and technology. Build products people love.",
    features: ["Case Studies", "Networking", "Certification"],
    icon: <Briefcase className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-50"
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.05),transparent)]"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6"
              >
                <ShieldCheck className="w-4 h-4" />
                Career-Transforming Curriculums
              </motion.div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                Deeply researched, industry-vetted programs designed to take you from zero to a professional in record time.
              </p>
           </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
                >
                  <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{program.duration}</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">{program.highlight}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed">{program.description}</p>
                  
                  <ul className="space-y-3 mb-10">
                    {program.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/signup"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Join 500+ Hiring Partners</h2>
            <p className="text-slate-500">Our graduates work at the most innovative companies in the world.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
