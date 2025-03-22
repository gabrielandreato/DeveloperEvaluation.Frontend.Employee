import {DefaultQueryParameter} from "../types/DefaultQueryParameters";

export interface GetListUserRequest extends DefaultQueryParameter {
    userName?: string; 
    email?: string; 
    documentNumber?: string; 
    managerId?: number; 
    role?: number; 
}