"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "EcoTrack Dashboard",
    description: "A real-time environmental monitoring dashboard built with React and Node.js.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using Stable Diffusion API.",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "FinTech Mobile App",
    description: "A secure and fast mobile banking application mockup with React Native.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "Portfolio CMS",
    description: "A customizable content management system for developers.",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    icon: <Code2 className="w-5 h-5" />
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold mb-6"
            >
              Real-World <span className="text-blue-400">Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Apply your skills by building industry-grade projects. From web apps to AI models, we cover it all.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full text-slate-800 shadow-sm flex items-center gap-2">
                        {project.icon}
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-6">{project.description}</p>
                    <Link 
                      href="/courses"
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      Learn how to build this
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Build your portfolio today</h2>
              <p className="text-blue-100 mb-10 text-lg">Join 10k+ students building the future of tech.</p>
              <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors">
                 Get Started
              </Link>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
