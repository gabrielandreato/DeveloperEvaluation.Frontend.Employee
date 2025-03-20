import instance from "../common/config/api";
import LoginRequest from "./interfaces/LoginRequest";


const  categoriasService = {
    login:  async (credentials: LoginRequest) => {
        const resposta = await instance.post('/User/Login', credentials);
        return resposta.data;
    },

    getList:  async () => {
        const resposta = await instance.get('/User/List');
        return resposta.data;
    }
}

export default categoriasService;