export interface Age {
    count: number;
    name: string;
    age: number;
}

export interface Gender {
    count: number;
    name: string;
    gender: string;
    probability: number;
}

export interface Nationality {
    count: number;
    country: Country[];
    name: string;
}

interface Country {
    country_id: string;
    probability: number;
}