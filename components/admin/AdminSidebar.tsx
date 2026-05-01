"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, BookOpen, Video, List, Presentation, 
  Briefcase, FolderGit2, Gift, Users, UserCog, 
  CreditCard, Award, Star, Tag, FileText, Settings, 
  Image, MessageSquare, BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Overview Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Manage Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Manage Lessons", href: "/admin/lessons", icon: Video },
  { name: "Manage Categories", href: "/admin/categories", icon: List },
  { name: "Manage Programs", href: "/admin/programs", icon: Presentation },
  { name: "Manage Workshops", href: "/admin/workshops", icon: Briefcase },
  { name: "Manage Projects", href: "/admin/projects", icon: FolderGit2 },
  { name: "Free Resources", href: "/admin/resources", icon: Gift },
  { name: "Manage Students", href: "/admin/students", icon: Users },
  { name: "Manage Instructors", href: "/admin/instructors", icon: UserCog },
  { name: "Orders & Payments", href: "/admin/payments", icon: CreditCard },
  { name: "Certificates", href: "/admin/certificates", icon: Award },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Coupons/Offers", href: "/admin/coupons", icon: Tag },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Hero Section", href: "/admin/hero", icon: Image },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-900 text-slate-300 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
        <Link href="/admin">
          <span className="text-2xl font-bold text-white">AI Swadesh</span>
          <span className="block text-xs font-medium text-blue-400 uppercase tracking-widest mt-1">Admin Panel</span>
        </Link>
      </div>
      
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors group",
                  isActive 
                    ? "bg-blue-600 text-white" 
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 mr-3 flex-shrink-0",
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                )} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
