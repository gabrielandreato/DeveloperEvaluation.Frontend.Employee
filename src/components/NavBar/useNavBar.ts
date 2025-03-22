import {useNavigate} from "react-router-dom";

export default function useNavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem('authToken', '');
        navigate('/');
    };
    
    return {handleLogout};
}