export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  amountRupees: number;
  amountPaise: number;
  currency: string;
  paymentProvider: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  status: "pending" | "success" | "failed";
  createdAt: number;
}
