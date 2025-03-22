import userService from "../../services/userService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function useLogin() {

    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLogin = async (event: any) => {
        event.preventDefault();
        try {
            const response = await userService.login({ userName: username, password });
            localStorage.setItem('authToken', response);
            navigate('/employee/manage');
        } catch (error) {
            console.error('Login failed', error);
        }
    };
    
    return { onLogin, username, setUsername, password, setPassword}
}