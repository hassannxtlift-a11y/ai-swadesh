import { AnalyticsCard } from "@/components/admin/AnalyticsCard";
import { DollarSign, Users, BookOpen, ShoppingBag, TrendingUp, Presentation, Award } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500">Welcome to your admin control panel.</p>
        </div>
        <Link 
          href="/admin/courses/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-100"
        >
          <BookOpen className="w-4 h-4" />
          Create New Course
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnalyticsCard 
          title="Total Revenue" 
          value="₹4,25,000" 
          icon={<DollarSign className="w-8 h-8" />} 
          trend="12% vs last month"
          isPositive={true}
        />
        <AnalyticsCard 
          title="Today Revenue" 
          value="₹12,400" 
          icon={<TrendingUp className="w-8 h-8" />} 
          trend="5% vs yesterday"
          isPositive={true}
        />
        <AnalyticsCard 
          title="Total Students" 
          value="5,240" 
          icon={<Users className="w-8 h-8" />} 
          trend="8% vs last month"
          isPositive={true}
        />
        <AnalyticsCard 
          title="Total Courses" 
          value="45" 
          icon={<BookOpen className="w-8 h-8" />} 
        />
        <AnalyticsCard 
          title="Total Orders" 
          value="1,204" 
          icon={<ShoppingBag className="w-8 h-8" />} 
        />
        <AnalyticsCard 
          title="Active Workshops" 
          value="8" 
          icon={<Presentation className="w-8 h-8" />} 
        />
        <AnalyticsCard 
          title="Pending Certificates" 
          value="12" 
          icon={<Award className="w-8 h-8" />} 
          trend="Needs attention"
          isPositive={false}
        />
        <AnalyticsCard 
          title="Course Completion" 
          value="64%" 
          icon={<TrendingUp className="w-8 h-8" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Order ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3 rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">#ORD-001</td>
                  <td className="px-4 py-3">John Doe</td>
                  <td className="px-4 py-3">Digital Marketing Mastery</td>
                  <td className="px-4 py-3">₹999</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full text-xs font-medium">Success</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">#ORD-002</td>
                  <td className="px-4 py-3">Jane Smith</td>
                  <td className="px-4 py-3">Web Development Full Course</td>
                  <td className="px-4 py-3">₹1,999</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full text-xs font-medium">Success</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">#ORD-003</td>
                  <td className="px-4 py-3">Rahul K.</td>
                  <td className="px-4 py-3">AI for Beginners</td>
                  <td className="px-4 py-3">₹499</td>
                  <td className="px-4 py-3"><span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-medium">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Top Performing Courses</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <p className="font-semibold text-slate-900">Web Development Full Course</p>
                  <p className="text-sm text-slate-500">1,240 Enrollments</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">₹24,78,760</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-bold">2</div>
                <div>
                  <p className="font-semibold text-slate-900">Digital Marketing Mastery</p>
                  <p className="text-sm text-slate-500">980 Enrollments</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">₹9,79,020</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">3</div>
                <div>
                  <p className="font-semibold text-slate-900">Facebook Ads Mastery</p>
                  <p className="text-sm text-slate-500">650 Enrollments</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">₹3,24,350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
