"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Shield, Calendar, Edit2 } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="px-8 pb-8">
              <div className="relative flex justify-between items-end -mt-12 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-white p-1.5 shadow-lg">
                  <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-3xl font-bold text-blue-600">
                    {user?.displayName?.charAt(0) || user?.email?.charAt(0).toUpperCase() || "S"}
                  </div>
                </div>
                <button className="px-6 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 text-sm">
                  <Edit2 className="w-4 h-4" /> Edit Profile
                </button>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">{user?.displayName || "Student Name"}</h1>
                <p className="text-slate-500">Aspiring Developer & Tech Enthusiast</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail className="w-5 h-5 text-slate-400" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Shield className="w-5 h-5 text-slate-400" />
                    <span className="capitalize">Role: Student</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <span>Joined: {new Date(user?.metadata.creationTime || Date.now()).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col justify-center">
                   <p className="text-blue-600 font-bold text-2xl mb-1">1</p>
                   <p className="text-blue-600/70 text-sm font-medium">Courses Enrolled</p>
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
