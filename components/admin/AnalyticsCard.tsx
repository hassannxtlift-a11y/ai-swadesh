import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  isPositive?: boolean;
}

export function AnalyticsCard({ title, value, icon, trend, isPositive }: AnalyticsCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {trend && (
          <p className={`text-sm mt-2 font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '↑' : '↓'} {trend}
          </p>
        )}
      </div>
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
