export type User = {
    _id?: string;
    birth: Date;
    email: string;
    password: string;
    image: string;
    name: string;
    sex: "male" | "female";
    isAdmin?: boolean;
    created_at: Date;
};

export type RegisterUserData = {
    name: User["name"];
    email: User["email"];
    password: User["password"];
    birth: User["birth"];
    sex: User["sex"];
};

export type AxiosResponseType<T> = {
    content: T;
};

export type Room = {
    _id: string;
    breakfast: string[];
    hasSwimmingPool: boolean;
    hasBank: boolean;
    hasWifi: boolean;
    hasGym: boolean;
    hasParking: boolean;
    hasConditioner: boolean;
    hasSmokeZone: boolean;
    images: string[];
    price: number;
    rate: number;
    title: string;
    type: "president" | "balcony" | "studio" | "lovers" | "business" | "luxury";
};

export type Booking = {
    _id?: string;
    departure: Date;
    entry: Date;
    fullPrice: number;
    roomId: string;
    userId: string;
    adults: number;
    kids: number;
    created_at?: Date;
};

export type Comment = {
    _id?: string;
    pageId: Room["_id"];
    text: string;
    rate: number;
    userId: User["_id"];
    answerOn?: string;
    created_at?: Date;
};

export type Favorite = {
    _id?: string;
    roomId: string;
    userId: string;
};

export type Ticket = {
    _id?: string;
    email: string;
    name: string;
    message: string;
    status?: "pending" | "confirmed";
    cause: "errors" | "offer" | "other";
    created_at?: Date;
};

export type AuthResponse = {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    userId: string;
};

export type LoginType = {
    payload: {
        email: string;
        password: string;
    };
    navigate: (el: string) => void;
    redirect: string;
};

export type RegisterType = {
    payload: RegisterUserData;
    navigate: (el: string) => void;
};

export type DataType = {
    [key: string]: any;
};

export type FakeEventType = {
    target: {
        name: string;
        value: any;
    };
};
