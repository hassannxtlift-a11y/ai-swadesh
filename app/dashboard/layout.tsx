"use client";

import Link from "next/link";
import { 
  LayoutDashboard, PlayCircle, Award, Compass, Settings, User, LogOut, Map
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 h-screen fixed top-0 left-0 flex flex-col hidden md:flex z-20">
        <div className="p-6 border-b border-slate-100 flex-shrink-0">
          <Link href="/">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Swadesh
            </span>
          </Link>
        </div>
        
        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="space-y-1 px-3">
            <Link href="/dashboard" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors bg-blue-50 text-blue-700">
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Overview
            </Link>
            <Link href="/dashboard/courses" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <PlayCircle className="w-5 h-5 mr-3 text-slate-400" />
              My Courses
            </Link>
            <Link href="/dashboard/roadmap" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Map className="w-5 h-5 mr-3 text-slate-400" />
              AI Career Roadmap
            </Link>
            <Link href="/dashboard/certificates" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Award className="w-5 h-5 mr-3 text-slate-400" />
              Certificates
            </Link>
            <Link href="/courses" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              <Compass className="w-5 h-5 mr-3 text-slate-400" />
              Explore More
            </Link>
          </nav>
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <Link href="/profile" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900 mb-1">
            <User className="w-5 h-5 mr-3 text-slate-400" />
            Profile
          </Link>
          <Link href="/settings" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900 mb-1">
            <Settings className="w-5 h-5 mr-3 text-slate-400" />
            Settings
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-red-600 hover:bg-red-50 text-left"
          >
            <LogOut className="w-5 h-5 mr-3 text-red-400" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-4 sm:px-6 sticky top-0 z-10">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
              {user?.displayName?.charAt(0) || user?.email?.charAt(0).toUpperCase() || "S"}
            </div>
            <span className="text-sm font-semibold text-slate-700 hidden sm:block">
              {user?.displayName || "Student"}
            </span>
          </div>
        </header>
        
        <main className="flex-1 p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
