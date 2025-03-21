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

    getList:  async function getList(params: GetListUserRequest): Promise<PagedList<UserResponse>> {
        const queryString = toQueryString(params);
        const resposta = await instance.get(`/User/List?${queryString}`);
        return resposta.data;
    },
    create : async (user: CreateUserRequest) => {
        const resposta = await instance.post('/User/', user);
        return resposta.data;
    }
}

function toQueryString(params: Record<string, any>): string {
    return Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null) 
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export default categoriasService;