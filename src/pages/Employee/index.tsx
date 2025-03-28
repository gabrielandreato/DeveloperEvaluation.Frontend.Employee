﻿import styles from './ManageEmployees.module.scss';
import useEmployee from "./useEmployee";

export default function ManageEmployees() {
    const {users, handleAddNew, handleEdit, handleDelete, handlePrevious, handleNext} = useEmployee();
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.dFlex} ${styles.justifyContentBetween}`}>
                <h2 className={styles.mb4}>Manage Employees</h2>
                <button onClick={handleAddNew} className={styles.btn}>Add New Employee</button>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Actions</th>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {users.items.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <button onClick={() => handleEdit(user.id)} className={styles.btn}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}
                                    className={`${styles.btn} ${styles.btnDanger}`}>Delete
                            </button>
                        </td>
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.dFlex}>
                <button className={styles.btn} disabled={!users.hasPreviousPage} onClick={handlePrevious}>
                    Previous
                </button>
                <button className={styles.btn} disabled={!users.hasNextPage} onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}