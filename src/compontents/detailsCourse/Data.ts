export interface LectureItem {
  type:
    | "video"
    | "video-summary"
    | "homework"
    | "quiz"
    | "homework-solution"
    | "file"
    | "homework-solution-summary";
  title: string;
  description: string;
  totalWatchedPercent?: string;
  durationMinutes?: number;
  watchedMinutes?: number;
  averageResult?: string;
  minResult?: string;
  maxResult?: string;
  attempts?: number;
  completions?: number;
  questionsCount?: number;
  file?: File | string;
}

export interface Lecture {
  title: string; // Lecture title
  items: LectureItem[]; // Nested accordion items
}

export const chemistryLecturesData: Array<Lecture> = [
  {
    title: "المحاضرة الأولى - الباب الثالث",
    items: [
      {
        type: "video",
        title: "المحاضرة الأولى - الباب الثالث",
        totalWatchedPercent: "NaN %",
        description: "مقدمه عن الاتزان الكيميائى",
        durationMinutes: 186,
        watchedMinutes: 0,
      },
      {
        type: "video-summary",
        title: "ملخص المحاضره الاولى - الباب التالت",
        description: "مقدمه الاتزان والعوامل المؤثره على سرعه التفاعل الكميائى",
        totalWatchedPercent: "NaN %",
        durationMinutes: 54,
        watchedMinutes: 0,
      },
      {
        type: "homework",
        title: "واجب المحاضره الاولى - الباب التالت",
        description: "مقدمه عن الاتزان الكيميائى",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 47,
        durationMinutes: 500,
      },
      {
        type: "quiz",
        title: "كويز المحاضره الاولى - الباب التالت",
        description: "مقدمه عن الاتزان الكيميائى",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 10,
        durationMinutes: 500,
      },
      {
        type: "homework-solution",
        title: "حل واجب المحاضرة الاولى - الباب الثالث",
        description: "مقدمه عن الاتزان الكيميائى",
        totalWatchedPercent: "NaN %",
        durationMinutes: 75,
        watchedMinutes: 0,
      },
      {
        type: "homework-solution-summary",
        title: " مذكره حل واجب المحاضره الاولى - الباب التالت",
        description: "مقدمه الاتزان والعوامل المؤثره على سرعه التفاعل الكميائى",
        file: "text",
      },
      {
        type: "file",
        title: "مذكرات المحاضره الأولي - الباب الثالثت",
        description:
          "مذكره موجود فيها كل الي تم شرحه في المحاضره علشان نسهل عليك المذاكره يا بطل",
        file: "text",
      },
    ],
  },

  {
    title: "المحاضرة الثانية - الباب الرابع",
    items: [
      {
        type: "video",
        title: "المحاضرة الثانية - الباب الرابع",
        totalWatchedPercent: "NaN %",
        description: "التفاعلات الكيميائية وأنواعها",
        durationMinutes: 120,
        watchedMinutes: 0,
      },
      {
        type: "video-summary",
        title: "ملخص المحاضرة الثانية - الباب الرابع",
        description: "شرح التفاعلات الكيميائية الأساسية مع أمثلة",
        totalWatchedPercent: "NaN %",
        durationMinutes: 50,
        watchedMinutes: 0,
      },
      {
        type: "homework",
        title: "واجب المحاضره الثانية - الباب الرابع",
        description: "حل مسائل حول التفاعلات الكيميائية",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 40,
        durationMinutes: 400,
      },
      {
        type: "quiz",
        title: "كويز المحاضره الثانية - الباب الرابع",
        description: "أسئلة قصيرة على التفاعلات الكيميائية",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 10,
        durationMinutes: 200,
      },
      {
        type: "homework-solution",
        title: "حل واجب المحاضرة الثانية - الباب الرابع",
        description: "حل المسائل خطوة بخطوة",
        totalWatchedPercent: "NaN %",
        durationMinutes: 60,
        watchedMinutes: 0,
      },
    ],
  },

  {
    title: "المحاضرة الثالثة - الباب الخامس",
    items: [
      {
        type: "video",
        title: "المحاضرة الثالثة - الباب الخامس",
        totalWatchedPercent: "NaN %",
        description: "الأحماض والقواعد ومبادئها",
        durationMinutes: 130,
        watchedMinutes: 0,
      },
      {
        type: "video-summary",
        title: "ملخص المحاضرة الثالثة - الباب الخامس",
        description: "شرح مبسط للأحماض والقواعد مع أمثلة",
        totalWatchedPercent: "NaN %",
        durationMinutes: 45,
        watchedMinutes: 0,
      },
      {
        type: "homework",
        title: "واجب المحاضره الثالثة - الباب الخامس",
        description: "تمارين حول الأحماض والقواعد",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 35,
        durationMinutes: 300,
      },
      {
        type: "quiz",
        title: "كويز المحاضره الثالثة - الباب الخامس",
        description: "أسئلة قصيرة على الأحماض والقواعد",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 10,
        durationMinutes: 200,
      },
      {
        type: "homework-solution",
        title: "حل واجب المحاضرة الثالثة - الباب الخامس",
        description: "حل التمارين خطوة بخطوة",
        totalWatchedPercent: "NaN %",
        durationMinutes: 60,
        watchedMinutes: 0,
      },
    ],
  },

  {
    title: "المحاضرة الرابعة - الباب السادس",
    items: [
      {
        type: "video",
        title: "المحاضرة الرابعة - الباب السادس",
        totalWatchedPercent: "NaN %",
        description: "العوامل المؤثرة على سرعة التفاعل الكيميائي",
        durationMinutes: 140,
        watchedMinutes: 0,
      },
      {
        type: "video-summary",
        title: "ملخص المحاضرة الرابعة - الباب السادس",
        description: "شرح العوامل المؤثرة على سرعة التفاعل الكيميائي",
        totalWatchedPercent: "NaN %",
        durationMinutes: 60,
        watchedMinutes: 0,
      },
      {
        type: "homework",
        title: "واجب المحاضره الرابعة - الباب السادس",
        description: "حل مسائل عن سرعة التفاعل الكيميائي",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 30,
        durationMinutes: 300,
      },
      {
        type: "quiz",
        title: "كويز المحاضره الرابعة - الباب السادس",
        description: "أسئلة قصيرة عن سرعة التفاعل",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 10,
        durationMinutes: 200,
      },
    ],
  },

  {
    title: "المحاضرة الخامسة - الباب السابع",
    items: [
      {
        type: "video",
        title: "المحاضرة الخامسة - الباب السابع",
        totalWatchedPercent: "NaN %",
        description: "التجارب المختبرية المتقدمة ومراجعة شاملة",
        durationMinutes: 150,
        watchedMinutes: 0,
      },
      {
        type: "video-summary",
        title: "ملخص المحاضرة الخامسة - الباب السابع",
        description: "شرح التجارب المختبرية والمراجعة",
        totalWatchedPercent: "NaN %",
        durationMinutes: 60,
        watchedMinutes: 0,
      },
      {
        type: "homework",
        title: "واجب المحاضره الخامسة - الباب السابع",
        description: "تحضير تقرير عن التجارب المختبرية",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 40,
        durationMinutes: 400,
      },
      {
        type: "quiz",
        title: "كويز المحاضره الخامسة - الباب السابع",
        description: "اختبار قصير على التجارب المختبرية",
        averageResult: "NaN %",
        minResult: "0 %",
        maxResult: "0 %",
        attempts: 0,
        completions: 0,
        questionsCount: 10,
        durationMinutes: 200,
      },
    ],
  },
];
