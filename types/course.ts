export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnailUrl: string;
  category: string;
  level: string;
  language: string;
  price: number;
  discountPrice?: number;
  isFree: boolean;
  rating: number;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  instructorName: string;
  instructorPhoto?: string;
  createdAt: number;
  updatedAt: number;
  published: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
  isPreview: boolean;
  createdAt: number;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: number;
  paymentId?: string;
  status: "active" | "completed" | "cancelled";
}

export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  completedLessons: string[];
  progressPercentage: number;
  lastWatchedLessonId?: string;
  updatedAt: number;
}

export interface Review {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  review: string;
  createdAt: number;
}
