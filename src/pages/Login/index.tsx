import { useState } from 'react';
import styles from './Login.module.scss';
import userService from "../../services/userService";

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLogin = async (event: any) => {
        event.preventDefault();
        try {
            const response = await userService.login({ userName: username, password });
            
            console.log(response);
            
            localStorage.setItem('authToken', response);
            
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Employee App</h2>
                <form className={styles.form} onSubmit={onLogin}>
                    <label htmlFor="username">User name:</label>
                    <input
                        className={styles.input}
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input
                        className={styles.input}
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className={styles.button} type="submit">Login</button>
                </form>
            </div>
        </>
    );
}