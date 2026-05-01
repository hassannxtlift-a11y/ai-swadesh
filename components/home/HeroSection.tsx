"use client";

import Link from "next/link";
import { ArrowRight, Play, BookOpen, MonitorPlay, Award } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Background Gradients */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 -translate-y-12 translate-x-1/4 right-0 w-[800px] h-[600px] bg-purple-300/30 rounded-full blur-3xl mix-blend-multiply"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 -translate-y-12 -translate-x-1/4 left-0 w-[800px] h-[600px] bg-blue-300/30 rounded-full blur-3xl mix-blend-multiply"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                Premium Indian EdTech SaaS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                Skills for Today. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Success for Tomorrow.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Learn in-demand skills with practical courses, live workshops, real-world projects and career-focused programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/courses" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/signup" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm">
                  Start Free Learning
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-500" /> Free & Paid Courses</div>
                <div className="flex items-center gap-2"><Award className="w-5 h-5 text-purple-500" /> Certificates</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 mt-16 lg:mt-0 relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/50"
                 >
                    <Play className="w-10 h-10 text-white ml-2" />
                 </motion.div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 backdrop-blur-md bg-white/90"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Top Skill</p>
                <p className="text-sm font-bold text-slate-800">Web Development</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 backdrop-blur-md bg-white/90"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Trending</p>
                <p className="text-sm font-bold text-slate-800">AI Tools</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
