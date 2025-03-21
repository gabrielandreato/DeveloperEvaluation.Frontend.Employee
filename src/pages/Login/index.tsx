import styles from './Login.module.scss';
import useLogin from "./useLogin";

export default function Login() {
    
   const { onLogin,username, setUsername, password, setPassword} = useLogin();

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