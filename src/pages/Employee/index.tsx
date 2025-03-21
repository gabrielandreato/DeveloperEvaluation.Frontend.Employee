import { useState, useEffect } from 'react';
import categoriasService from '../../services/userService';
import { UserResponse } from "../../interfaces/response/UserResponse";
import { PagedList } from "../../interfaces/types/PagedList";
import styles from './ManageEmployees.module.scss';
import {useNavigate} from "react-router-dom"; // Importa o CSS module

export default function ManageEmployees() {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            const response: PagedList<UserResponse> = await categoriasService.getList({ page });
            setUsers(response.items);
            setTotalPages(Math.ceil(response.totalCount / response.pageSize));
        };
        fetchUsers();
    }, [page]);
    
    const navigate = useNavigate();

    const handleNext = () => setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    const handlePrevious = () => setPage((prevPage) => Math.max(prevPage - 1, 0));

    const handleAddNew = (e: any) => {
        navigate("/employee/add");
    };

    const handleEdit = (userId:  number) => {
        navigate("/employee/edit/" + userId);  
    };

    const handleDelete = (userId: number) => {
        
        console.log('Delete user', userId);
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.dFlex} ${styles.justifyContentBetween}`}>
                <h2 className={styles.mb4}>Manage Employees</h2>
                <button onClick={handleAddNew} className={styles.btn}>Add New Employee</button>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <button onClick={() => handleEdit(user.id)} className={styles.btn}>Edit</button>
                            <button onClick={() => handleDelete(user.id)} className={`${styles.btn} ${styles.btnDanger}`}>Delete</button>
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
                <button className={styles.btn} disabled={page <= 0} onClick={handlePrevious}>
                    Previous
                </button>
                <button className={styles.btn} disabled={page >= totalPages - 1} onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}