import styles from './Navbar.module.scss';
import {useNavigate} from "react-router-dom";
import useNavBar from "./useNavBar";

export default function Navbar() {
    
    const {handleLogout} = useNavBar();
    
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