import {CreatePhoneNumberRequest} from "./CreatePhoneNumberRequest";
import {RoleEnum} from "../../common/constants/RoleEnum";

export interface CreateUserRequest {
    userName: string;
    password: string;
    rePassword: string;
    firstName: string;
    lastName: string;
    email: string;
    documentNumber: string;
    phoneNumbers: CreatePhoneNumberRequest[];
    managerId?: number;
    dateOfBirth: Date;
    role: number;
}