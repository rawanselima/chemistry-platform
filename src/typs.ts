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

export interface levels {
  id: string | number;
  level: string;
  studentNumber: number;
}

export interface courses {
  id: string | number;
  img: string;
  courseName: string;
  level: string;
  levelId: string | number;
  lecturesNumber: string | number; 
  studentsNumber: string | number;
  description: string;
  price: number;
  discount: number;
}

export interface lectures {
  id: string | number;
  courseName: string;
  courseId: string | number;
  lectureName: string;
  levelId: string | number;
  levelName: string;
  examsNumber: number;
  homeworksNumber: number;
  videosNumber: number;
}

export interface videos {
  id: string | number;
  courseId: string | number;
  courseName: string;
  lectureName: string;
  lectureId: string | number;
  levelName: string | number;
  videoName: string;
  videoLink: string;
  time: string;
  createdAt: string;
}
