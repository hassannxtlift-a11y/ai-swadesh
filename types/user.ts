export type UserRole = "student" | "admin";

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL?: string;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}
