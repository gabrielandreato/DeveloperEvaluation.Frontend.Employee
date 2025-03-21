import { Outlet } from 'react-router-dom';
import styles from './DefaultPage.module.scss';
import Navbar from "../NavBar";

export default function DefaultPage() {
    return (
        <div className={styles.defaultContainer}>
            <Navbar />
            <div className={styles.pageContent}>
                <Outlet />
            </div>
        </div>
    );
}