import { useState } from 'react';
import styles from './AddEmployee.module.scss';
import {RoleEnum} from "../../../common/constants/RoleEnum";
import {CreateUserRequest} from "../../../interfaces/request/CreateUserRequest";
import {CreatePhoneNumberRequest} from "../../../interfaces/request/CreatePhoneNumberRequest";
import UserService from "../../../services/userService";
import {useNavigate} from "react-router-dom";

export default function AddEmployee() {
    const [form, setForm] = useState<CreateUserRequest>({
        userName: '',
        password: '',
        rePassword: '',
        firstName: '',
        lastName: '',
        email: '',
        documentNumber: '',
        phoneNumbers: [], 
        managerId: undefined,
        dateOfBirth: new Date(),
        role: 1, 
    });
    
    const navigate = useNavigate();

    const [newPhoneNumber, setNewPhoneNumber] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePhoneNumberChange = (index: number, value: string) => {
        const newPhoneNumbers = [...form.phoneNumbers];
        newPhoneNumbers[index].number = value;
        setForm({ ...form, phoneNumbers: newPhoneNumbers });
    };

    const [newPhoneType, setNewPhoneType] = useState('');

    const handleAddPhoneNumber = () => {
        if (newPhoneNumber.trim() !== "") {
            const phoneNumberRequest: CreatePhoneNumberRequest = {
                number: newPhoneNumber.trim(),
            };

            setForm(prevState => ({
                ...prevState,
                phoneNumbers: [...prevState.phoneNumbers, phoneNumberRequest]
            }));

            setNewPhoneNumber('');
            setNewPhoneType('');
        }
    };

    const handleRemovePhoneNumber = (index: number) => {
        setForm(prevState => ({
            ...prevState,
            phoneNumbers: prevState.phoneNumbers.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await UserService.create(form);
            navigate('/manage-employees')
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className={`${styles.container}`}>
            <h2 className={styles.mb4}>Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="rePassword">Confirm Password</label>
                    <input
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        value={form.rePassword}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="documentNumber">Document Number</label>
                    <input
                        type="text"
                        id="documentNumber"
                        name="documentNumber"
                        value={form.documentNumber}
                        onChange={handleChange}
                        className={styles.formControl}
                        required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={form.dateOfBirth.toISOString().split('T')[0]}
                        onChange={(e) => setForm({...form, dateOfBirth: new Date(e.target.value)})}
                        className={styles.formControl} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className={styles.formControl}
                        required>
                        <option value="1">Employee</option>
                        <option value="2">Leader</option>
                        <option value="3">Director</option>
                        <option value="4">Admin</option>
                    </select>
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="newPhoneNumber">Add Phone Number</label>
                    <input
                        type="text"
                        id="newPhoneNumber"
                        name="newPhoneNumber"
                        value={newPhoneNumber}
                        onChange={(e) => setNewPhoneNumber(e.target.value)}
                        className={styles.formControl}
                        placeholder="Enter Phone Number" />
                    <button type="button" onClick={handleAddPhoneNumber} className={styles.btn}>Add</button>
                </div>

                {form.phoneNumbers.length > 0 && (
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {form.phoneNumbers.map((phoneNumber, index) => (
                            <tr key={index}>
                                <td>
                                    <button type="button" onClick={() => handleRemovePhoneNumber(index)} className={`${styles.btn} ${styles.btnDanger}`}>Delete</button>
                                </td>
                                <td>{phoneNumber.number}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                
                <button type="submit" className={styles.btn}>Add Employee</button>
            </form>
        </div>
    );
}