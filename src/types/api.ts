export interface Topic {
    id: string;
    title: string;
    description: string;
}

export interface Category {
    id: string;
    name: string;
    topics: Topic[];
}

export interface ApiResponse {
    categories: Category[];
}

export interface Subject {
    id: string;
    title: string;
    image: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
}

export interface ReviewSubjectsResponse {
    subjects: Subject[];
}

export interface Exam {
    id: string;
    category: string;
    title: string;
    daysAvailable: number;
    textColor: string;
}

export interface ExamsResponse {
    exams: Exam[];
}
