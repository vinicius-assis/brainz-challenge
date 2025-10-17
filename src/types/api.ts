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
