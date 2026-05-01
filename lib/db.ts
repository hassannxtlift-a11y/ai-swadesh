import { db } from "./firebase";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  orderBy,
  limit
} from "firebase/firestore";

// Get all courses
export const getCourses = async () => {
  const querySnapshot = await getDocs(collection(db, "courses"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new course (Admin)
export const addCourse = async (courseData: any) => {
  return await addDoc(collection(db, "courses"), courseData);
};

// Get user profile
export const getUserProfile = async (uid: string) => {
  const q = query(collection(db, "users"), where("uid", "==", uid), limit(1));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
  }
  return null;
};
