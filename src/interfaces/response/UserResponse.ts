export interface PhoneNumberResponse {
    number: string;
}

export interface UserResponse {
    id: number;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    documentNumber: string;
    managerId?: number; 
    manager?: UserResponse;
    dateOfBirth: string;
    role: number;  
    phoneNumbers: PhoneNumberResponse[];
}