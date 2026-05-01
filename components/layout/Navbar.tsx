"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                AI Swadesh
              </span>
            </Link>
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <Link href="/courses" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Courses</Link>
              <Link href="/projects" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
              <Link href="/programs" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</Link>
              <Link href="/pricing" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative mr-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
              />
            </div>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">
                  Dashboard
                </Link>
                <button 
                  onClick={() => logout()}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-all"
                >
                  Logout
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {user.displayName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Courses</Link>
            <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Projects</Link>
            <Link href="/programs" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Programs</Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Pricing</Link>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Login</Link>
              <Link href="/signup" className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
