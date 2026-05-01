"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Info } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Start your journey without any cost.",
    features: ["Access to 5+ Free Courses", "Community Access", "Public Profile", "Basic Support"],
    cta: "Join for Free",
    popular: false
  },
  {
    name: "Pro Learner",
    price: "499",
    period: "/month",
    description: "Best for dedicated students looking for growth.",
    features: ["Access to All Courses", "Project Reviews", "Certificates", "Priority Support", "AI Career Roadmap"],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Ultimate",
    price: "4,999",
    period: "/year",
    description: "Save big and get lifetime-style access.",
    features: ["Everything in Pro", "1-on-1 Mentorship", "Job Assistance", "Resume Building", "Interview Prep"],
    cta: "Go Ultimate",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        {/* Pricing Header */}
        <section className="py-24 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6"
            >
              Simple, Transparent <span className="text-blue-600">Pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Invest in your future with plans that fit your learning style and budget. No hidden fees.
            </motion.p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative bg-white rounded-3xl p-10 border ${plan.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-white" />
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                      {plan.period && <span className="text-slate-500 font-medium">{plan.period}</span>}
                    </div>
                    <p className="text-slate-500 text-sm mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/signup"
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm">
                <Info className="w-4 h-4" />
                Special discounts available for students and large teams. <Link href="/contact" className="text-blue-600 font-bold ml-1">Contact us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
