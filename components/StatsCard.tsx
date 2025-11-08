import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function StatsCard({ icon: Icon, label, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#293796] to-[#1f2a6f] mb-4 mx-auto">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <div className="text-center">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">{value}</p>
        <p className="text-sm sm:text-base text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  );
}

