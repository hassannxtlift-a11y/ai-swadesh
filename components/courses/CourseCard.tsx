"use client";

import Link from "next/link";
import { Star, Users, Clock, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  id: string;
  slug: string;
  title: string;
  thumbnailUrl?: string;
  category: string;
  rating: number;
  studentsCount: number;
  price: number;
  discountPrice?: number;
  duration?: string;
  delay?: number;
}

export function CourseCard({
  slug = "course",
  title = "Untitled Course",
  thumbnailUrl,
  category = "General",
  rating = 5,
  studentsCount = 0,
  price = 0,
  discountPrice,
  duration,
  delay = 0
}: Partial<CourseCardProps>) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all flex flex-col h-full"
    >
      <Link href={`/courses/${slug}`} className="block relative aspect-video overflow-hidden bg-slate-100">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            <PlayCircle className="w-12 h-12 text-slate-300" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-md text-slate-800 shadow-sm">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/courses/${slug}`}>
          <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 mt-auto">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-slate-700">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{studentsCount.toLocaleString()}</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
        </div>
        
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            {discountPrice ? (
              <>
                <span className="text-lg font-bold text-slate-900">₹{discountPrice.toLocaleString()}</span>
                <span className="text-xs text-slate-400 line-through">₹{price.toLocaleString()}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-slate-900">
                {Number(price) === 0 ? "Free" : `₹${Number(price).toLocaleString()}`}
              </span>
            )}
          </div>
          <Link 
            href={`/courses/${slug}`}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
