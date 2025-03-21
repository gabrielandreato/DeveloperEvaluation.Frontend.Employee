import instance from "../common/config/api";
import LoginRequest from "../interfaces/request/LoginRequest";
import {PagedList} from "../interfaces/types/PagedList";
import {UserResponse} from "../interfaces/response/UserResponse";
import {GetListUserRequest} from "../interfaces/request/GetListUserRequest";
import {CreateUserRequest} from "../interfaces/request/CreateUserRequest";


const  categoriasService = {
    login:  async (credentials: LoginRequest) => {
        const resposta = await instance.post('/User/Login', credentials);
        return resposta.data;
    },

    getListAsync:  async function getList(params: GetListUserRequest): Promise<PagedList<UserResponse>> {
        const queryString = toQueryString(params);
        const response = await instance.get(`/User/List?${queryString}`);
        return response.data;
    },
    createAsync : async (user: CreateUserRequest) => {
        const response = await instance.post('/User/', user);
        return response.data;
    },
    getAsync:  async function getAsync(id: number): Promise<UserResponse> {
        const response = await instance.get(`/User/${id}`);
        return response.data;
    },
    updateAsync: async function updateAsync(id: string, user: CreateUserRequest) {
        const response = await instance.put('/User/' + id, user);
        return response.data;
    },
    deleteUserAsync: async function deleteUser (id: number) {
        const response = await instance.delete(`/User/${id}`);
        return response.data;
    },
}

function toQueryString(params: Record<string, any>): string {
    return Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null) 
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export default categoriasService;