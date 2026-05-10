export interface Course {
  id: string;
  code: string;
  title: string;
  instructor: string;
  description: string;
  schedule: string;
  enrolled?: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  grade?: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface Material {
  id: string;
  title: string;
  type: "pdf" | "video" | "link" | "document";
  uploadDate: string;
}

export const availableCourses: Course[] = [
  {
    id: "cs301",
    code: "CS 301",
    title: "Data Structures and Algorithms",
    instructor: "Course Instructor",
    description: "Advanced study of data structures including trees, graphs, and hash tables. Analysis of algorithm complexity.",
    schedule: "Mon, Wed, Fri 10:00 AM - 11:00 AM",
  },
  {
    id: "math201",
    code: "MATH 201",
    title: "Linear Algebra",
    instructor: "Course Instructor",
    description: "Vector spaces, linear transformations, eigenvalues and eigenvectors, and applications.",
    schedule: "Tue, Thu 2:00 PM - 3:30 PM",
  },
  {
    id: "eng102",
    code: "ENG 102",
    title: "Academic Writing",
    instructor: "Course Instructor",
    description: "Development of critical reading and writing skills for academic contexts.",
    schedule: "Mon, Wed 1:00 PM - 2:30 PM",
  },
  {
    id: "phys151",
    code: "PHYS 151",
    title: "General Physics I",
    instructor: "Course Instructor",
    description: "Mechanics, thermodynamics, and wave motion with laboratory component.",
    schedule: "Tue, Thu 9:00 AM - 10:30 AM",
  },
];

export const enrolledCourses: Course[] = [
  {
    id: "cs202",
    code: "CS 202",
    title: "Object-Oriented Programming",
    instructor: "Course Instructor",
    description: "Principles of object-oriented design and programming using Java. Topics include inheritance, polymorphism, and design patterns.",
    schedule: "Mon, Wed, Fri 9:00 AM - 10:00 AM",
    enrolled: true,
  },
  {
    id: "cs250",
    code: "CS 250",
    title: "Database Systems",
    instructor: "Course Instructor",
    description: "Database design, SQL, normalization, and transaction management. Introduction to NoSQL databases.",
    schedule: "Tue, Thu 11:00 AM - 12:30 PM",
    enrolled: true,
  },
  {
    id: "math150",
    code: "MATH 150",
    title: "Calculus II",
    instructor: "Course Instructor",
    description: "Integration techniques, sequences, series, and introduction to differential equations.",
    schedule: "Mon, Wed, Fri 2:00 PM - 3:00 PM",
    enrolled: true,
  },
];

export const courseAssignments: Record<string, Assignment[]> = {
  cs202: [
    {
      id: "a1",
      title: "Assignment 1: Class Design",
      dueDate: "2026-02-18",
      status: "graded",
      grade: 95,
    },
    {
      id: "a2",
      title: "Assignment 2: Inheritance and Polymorphism",
      dueDate: "2026-02-25",
      status: "submitted",
    },
    {
      id: "a3",
      title: "Assignment 3: Design Patterns",
      dueDate: "2026-03-05",
      status: "pending",
    },
  ],
  cs250: [
    {
      id: "a1",
      title: "Database Design Project",
      dueDate: "2026-02-20",
      status: "graded",
      grade: 88,
    },
    {
      id: "a2",
      title: "SQL Queries Exercise",
      dueDate: "2026-02-28",
      status: "pending",
    },
  ],
  math150: [
    {
      id: "a1",
      title: "Integration Techniques",
      dueDate: "2026-02-15",
      status: "graded",
      grade: 92,
    },
    {
      id: "a2",
      title: "Series and Sequences",
      dueDate: "2026-02-22",
      status: "submitted",
    },
    {
      id: "a3",
      title: "Differential Equations",
      dueDate: "2026-03-01",
      status: "pending",
    },
  ],
};

export const courseAnnouncements: Record<string, Announcement[]> = {
  cs202: [
    {
      id: "ann1",
      title: "Midterm Exam Schedule",
      content: "The midterm exam will be held on February 28th at 9:00 AM in Room 301. The exam will cover chapters 1-5.",
      date: "2026-02-10",
      author: "Course Instructor",
    },
    {
      id: "ann2",
      title: "Office Hours Update",
      content: "My office hours this week will be moved to Thursday 3-5 PM instead of Wednesday.",
      date: "2026-02-09",
      author: "Course Instructor",
    },
  ],
  cs250: [
    {
      id: "ann1",
      title: "Guest Lecture Next Week",
      content: "We will have a guest speaker from Oracle discussing real-world database applications.",
      date: "2026-02-08",
      author: "Course Instructor",
    },
  ],
  math150: [
    {
      id: "ann1",
      title: "Quiz on Friday",
      content: "There will be a quiz on integration techniques this Friday. Please review chapters 7 and 8.",
      date: "2026-02-11",
      author: "Course Instructor",
    },
  ],
};

export const courseMaterials: Record<string, Material[]> = {
  cs202: [
    {
      id: "m1",
      title: "Lecture 1: Introduction to OOP",
      type: "pdf",
      uploadDate: "2026-01-15",
    },
    {
      id: "m2",
      title: "Lecture 2: Classes and Objects",
      type: "pdf",
      uploadDate: "2026-01-20",
    },
    {
      id: "m3",
      title: "Video Tutorial: Inheritance",
      type: "video",
      uploadDate: "2026-01-25",
    },
    {
      id: "m4",
      title: "Design Patterns Cheat Sheet",
      type: "document",
      uploadDate: "2026-02-01",
    },
  ],
  cs250: [
    {
      id: "m1",
      title: "SQL Reference Guide",
      type: "pdf",
      uploadDate: "2026-01-18",
    },
    {
      id: "m2",
      title: "Database Design Tutorial",
      type: "video",
      uploadDate: "2026-01-22",
    },
    {
      id: "m3",
      title: "Normalization Examples",
      type: "document",
      uploadDate: "2026-01-28",
    },
  ],
  math150: [
    {
      id: "m1",
      title: "Integration Techniques Notes",
      type: "pdf",
      uploadDate: "2026-01-16",
    },
    {
      id: "m2",
      title: "Practice Problems",
      type: "document",
      uploadDate: "2026-01-23",
    },
    {
      id: "m3",
      title: "Series Convergence Tests",
      type: "pdf",
      uploadDate: "2026-02-05",
    },
  ],
};

export const syllabusData: Record<string, {
  description: string;
  objectives: string[];
  grading: { component: string; weight: string }[];
  schedule: { week: string; topic: string }[];
}> = {
  cs202: {
    description: "This course provides an in-depth study of object-oriented programming principles and practices using Java.",
    objectives: [
      "Understand and apply object-oriented programming concepts",
      "Design and implement class hierarchies using inheritance",
      "Apply polymorphism and abstraction effectively",
      "Implement common design patterns",
      "Write clean, maintainable, and well-documented code",
    ],
    grading: [
      { component: "Assignments", weight: "40%" },
      { component: "Midterm Exam", weight: "25%" },
      { component: "Final Exam", weight: "25%" },
      { component: "Participation", weight: "10%" },
    ],
    schedule: [
      { week: "Week 1-2", topic: "Introduction to OOP and Classes" },
      { week: "Week 3-4", topic: "Inheritance and Polymorphism" },
      { week: "Week 5-6", topic: "Abstract Classes and Interfaces" },
      { week: "Week 7-8", topic: "Design Patterns" },
      { week: "Week 9-10", topic: "Exception Handling and Testing" },
    ],
  },
  cs250: {
    description: "A comprehensive introduction to database systems including design, implementation, and management.",
    objectives: [
      "Design normalized relational databases",
      "Write complex SQL queries",
      "Understand transaction management and concurrency control",
      "Explore NoSQL database alternatives",
      "Implement database-driven applications",
    ],
    grading: [
      { component: "Projects", weight: "50%" },
      { component: "Midterm Exam", weight: "20%" },
      { component: "Final Exam", weight: "20%" },
      { component: "Quizzes", weight: "10%" },
    ],
    schedule: [
      { week: "Week 1-2", topic: "Database Fundamentals and ER Modeling" },
      { week: "Week 3-4", topic: "Relational Model and SQL Basics" },
      { week: "Week 5-6", topic: "Advanced SQL and Normalization" },
      { week: "Week 7-8", topic: "Transaction Management" },
      { week: "Week 9-10", topic: "NoSQL and Modern Databases" },
    ],
  },
  math150: {
    description: "Continuation of Calculus I with focus on integration and series.",
    objectives: [
      "Master various integration techniques",
      "Understand and apply sequences and series",
      "Solve basic differential equations",
      "Apply calculus to real-world problems",
      "Develop mathematical reasoning skills",
    ],
    grading: [
      { component: "Homework", weight: "30%" },
      { component: "Quizzes", weight: "20%" },
      { component: "Midterm Exam", weight: "20%" },
      { component: "Final Exam", weight: "30%" },
    ],
    schedule: [
      { week: "Week 1-2", topic: "Integration Techniques" },
      { week: "Week 3-4", topic: "Applications of Integration" },
      { week: "Week 5-6", topic: "Sequences and Series" },
      { week: "Week 7-8", topic: "Power Series" },
      { week: "Week 9-10", topic: "Differential Equations" },
    ],
  },
};