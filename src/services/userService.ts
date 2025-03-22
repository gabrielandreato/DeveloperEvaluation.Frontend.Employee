import instance from "../common/config/api";
import LoginRequest from "../interfaces/request/LoginRequest";
import {PagedList} from "../interfaces/types/PagedList";
import {UserResponse} from "../interfaces/response/UserResponse";
import {GetListUserRequest} from "../interfaces/request/GetListUserRequest";
import {CreateUserRequest} from "../interfaces/request/CreateUserRequest";


const  userService = {
    login:  async (credentials: LoginRequest) => {
        try {
            const resposta = await instance.post('/User/Login', credentials);
            return resposta.data;
        } catch (e: any) {
            alert(`Error to login: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },

    getListAsync:  async function getList(params: GetListUserRequest): Promise<PagedList<UserResponse>> {
        try {
            const queryString = toQueryString(params);
            const response = await instance.get(`/User/List?${queryString}`);
            return response.data;
        } catch (e: any) {
            alert(`Error retrieving users: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },
    createAsync : async (user: CreateUserRequest) => {
        try {
            const response = await instance.post('/User/', user);
            return response.data;
        } catch (e: any) {
            alert(`Error creating user: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },
    getAsync:  async function getAsync(id: number): Promise<UserResponse> {
        try {
            const response = await instance.get(`/User/${id}`);
            return response.data;
        } catch (e: any) {
            alert(`Error retrieving user: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },
    updateAsync: async function updateAsync(id: string, user: CreateUserRequest) {
        try {
            const response = await instance.put('/User/' + id, user);
            return response.data;
        } catch (e: any) {
            alert(`Error updating user: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },
    deleteUserAsync: async function deleteUser (id: number) {
        try {
        const response = await instance.delete(`/User/${id}`);
        return response.data;
        } catch (e: any) {
            alert(`Error deleting user: ${e?.response?.data ?? 'backend not responding'}`);
            throw e;
        }
    },
}

function toQueryString(params: Record<string, any>): string {
    return Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null) 
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export default userService;