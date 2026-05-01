export interface Workshop {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  date: string;
  time: string;
  price: number;
  isFree: boolean;
  meetingLink?: string;
  studentsJoined: number;
  createdAt: number;
}
