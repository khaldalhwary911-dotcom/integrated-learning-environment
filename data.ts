import { CourseCategory, Quiz, Course, AnyUser, Transaction, FinancialCode, DepositRequest, ChatConversation } from './types';

export const COURSE_CATEGORIES: CourseCategory[] = [
    { id: 'cat-1', name: { en: 'Primary Stage', ar: 'المرحلة الابتدائية' } },
    { id: 'cat-2', name: { en: 'Middle School', ar: 'المرحلة الإعدادية' } },
    { id: 'cat-3', name: { en: 'High School', ar: 'المرحلة الثانوية' } },
];

export const QUIZZES: Quiz[] = [
    {
        id: 'quiz-1',
        title: 'Basics of Arabic Grammar',
        timeLimit: 10,
        questions: [
            { id: 'q-1-1', question: 'What is a "noun" in Arabic?', options: ['اسم', 'فعل', 'حرف', 'جملة'], correctAnswer: 'اسم' },
            { id: 'q-1-2', question: 'What is a "verb" in Arabic?', options: ['اسم', 'فعل', 'حرف', 'جملة'], correctAnswer: 'فعل' },
            { id: 'q-1-3', question: 'Which of these is a preposition?', options: ['من', 'ذهب', 'كتاب', 'مدرسة'], correctAnswer: 'من' },
        ]
    },
    {
        id: 'quiz-2',
        title: 'Advanced Rhetoric (Balagha)',
        timeLimit: 15,
        questions: [
            { id: 'q-2-1', question: 'What is "metaphor" in Balagha?', options: ['استعارة', 'تشبيه', 'كناية', 'مجاز'], correctAnswer: 'استعارة' },
            { id: 'q-2-2', question: 'Which literary device involves exaggeration?', options: ['مبالغة', 'طباق', 'سجع', 'جناس'], correctAnswer: 'مبالغة' },
        ]
    }
];

export const COURSES: Course[] = [
    {
        id: 'course-1',
        title: 'Arabic Grammar Essentials (Middle School)',
        description: 'A comprehensive course covering the essential rules of Arabic grammar (Nahw and Sarf) for middle school students, aligned with the Egyptian curriculum.',
        price: 250,
        categoryId: 'cat-2',
        teacherId: 'user-teacher-1',
        materials: [
            { id: 'mat-1-1', title: 'Lesson 1: Nouns, Verbs, and Particles', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-1-2', title: 'Lesson 2: The Nominal Sentence (الجملة الاسمية)', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-1-3', title: 'Practice Sheet 1', type: 'document', content: 'This document contains practice exercises for the first two lessons. Please complete them and check your answers.' },
            { id: 'mat-1-4', title: 'Lesson 3: The Verbal Sentence (الجملة الفعلية)', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
        ],
        quizId: 'quiz-1',
        quizRequirement: 'optional',
    },
    {
        id: 'course-2',
        title: 'Advanced Arabic Literature (High School)',
        description: 'Explore the depths of Arabic literature, from Pre-Islamic poetry to modern prose. This course is designed for high school students.',
        price: 400,
        categoryId: 'cat-3',
        teacherId: 'user-teacher-1',
        materials: [
            { id: 'mat-2-1', title: 'Introduction to Pre-Islamic Poetry', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-2-2', title: 'Analysis of "Mu\'allaqa of Imru\' al-Qais"', type: 'document', content: 'A deep dive into the themes, structure, and significance of the famous poem.' },
            { id: 'mat-2-3', title: 'The Golden Age of Arabic Literature', type: 'pdf', content: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ],
        quizId: 'quiz-2',
        quizRequirement: 'required',
    },
    {
        id: 'course-3',
        title: 'Fun with Arabic (Primary Stage)',
        description: 'A fun and interactive course to introduce young learners to the Arabic language through stories, songs, and games.',
        price: 150,
        categoryId: 'cat-1',
        teacherId: 'user-teacher-1',
        materials: [
            { id: 'mat-3-1', title: 'Video: Learning the Alphabet with Animals', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-3-2', title: 'Document: Coloring Pages for Letters', type: 'document', content: 'Printable coloring pages for each letter of the Arabic alphabet.' },
        ]
    },
    {
        id: 'course-4',
        title: 'Rhetoric and Eloquence (Balagha)',
        description: 'Master the art of Arabic rhetoric. This course covers Ilm al-Bayan, al-Badi\', and al-Ma\'ani for advanced high school students.',
        price: 350,
        categoryId: 'cat-3',
        teacherId: 'user-teacher-1',
        materials: [
            { id: 'mat-4-1', title: 'Introduction to Balagha', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-4-2', title: 'Tashbeeh and Isti\'ara', type: 'document', content: 'Detailed explanation with examples from the Quran and poetry.' },
        ],
        quizId: 'quiz-2',
    }
];

export const USERS: AnyUser[] = [
    {
        id: 'user-admin',
        name: 'Ahmed Khaled',
        email: 'ahmed.khaled7835@gmail.com',
        password: 'Amr@355010',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Khaled&background=333&color=fff',
    },
    {
        id: 'user-teacher-1',
        name: 'Fatma Hassan',
        email: 'teacher@example.com',
        password: 'password',
        role: 'teacher',
        avatar: 'https://ui-avatars.com/api/?name=Fatma+Hassan&background=8B5CF6&color=fff',
        assignedCourseIds: ['course-1', 'course-2', 'course-3', 'course-4']
    },
    {
        id: 'user-student-1',
        name: 'Ahmed Mohamed',
        email: 'ahmed@example.com',
        password: 'password',
        role: 'student',
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Mohamed&background=0D8ABC&color=fff',
        balance: 500,
        enrolledCourseIds: ['course-1'],
        preferredCategoryId: 'cat-2',
        studentPhoneNumber: '01234567890',
        parentPhoneNumber: '01098765432',
        parentAnotherPhoneNumber: '01123456789',
        quizAttempts: [],
        courseProgress: {
            'course-1': ['mat-1-1']
        }
    },
    {
        id: 'user-student-2',
        name: 'Fatima Ali',
        email: 'fatima@example.com',
        password: 'password',
        role: 'student',
        avatar: 'https://ui-avatars.com/api/?name=Fatima+Ali&background=0D8ABC&color=fff',
        balance: 100,
        enrolledCourseIds: [],
        preferredCategoryId: 'cat-3',
        studentPhoneNumber: '01234567891',
        parentPhoneNumber: '01098765433',
        parentAnotherPhoneNumber: '01123456780',
        quizAttempts: [],
        courseProgress: {}
    }
];

export const TRANSACTIONS: Transaction[] = [
    { id: 'txn-1', userId: 'user-student-1', userName: 'Ahmed Mohamed', type: 'redemption', amount: 500, date: new Date(Date.now() - 86400000 * 2).toISOString(), description: 'Initial balance deposit' },
    { id: 'txn-2', userId: 'user-student-1', userName: 'Ahmed Mohamed', type: 'purchase', amount: 250, date: new Date(Date.now() - 86400000).toISOString(), description: 'Purchased "Arabic Grammar Essentials (Middle School)"' }
];
export const FINANCIAL_CODES: FinancialCode[] = [];
export const DEPOSIT_REQUESTS: DepositRequest[] = [];
export const CHAT_CONVERSATIONS: ChatConversation[] = [];