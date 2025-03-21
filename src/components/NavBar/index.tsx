import styles from './Navbar.module.scss';
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem('authToken', '');
        navigate('/');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span>Employee Management</span>
                </div>
                <button className={styles.logoutButton} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}