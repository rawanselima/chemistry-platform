export type PagesProps = {
  title: string;
  path: string;
  value?: string;
};

export interface ExamResultProps {
  id: string;
  examName: string;
  totalQuestions: number;
  score: number;
  grade: string;
  correctAnswers: number;
  wrongAnswer: number;
  finishTime: string;
}

export interface ReceiptsProps {
  id: string;
  invoiceId: string;
  studentName?: string;
  totalPrice: number;
  discount: number;
  courseName: string;
  paymentTime: string;
  paymentMethod: string;
}
