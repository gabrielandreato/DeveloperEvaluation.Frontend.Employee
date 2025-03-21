import styles from './AddEmployee.module.scss';
import {useAddEmployee} from "./useAddEmployee";

export default function AddEmployee() {
    const {
        form,
        setForm,
        handleChange,
        handleAddPhoneNumber,
        handleRemovePhoneNumber,
        handleSubmit,
        id,
        newPhoneNumber,
        setNewPhoneNumber
    } = useAddEmployee();

    return (
        <div className={`${styles.container}`}>
            <h2 className={styles.mb4}>{id ? 'Edit Employee' : 'Add New Employee'}</h2>
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
                        required/>
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
                        required/>
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
                        required/>
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
                        required/>
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
                        required/>
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
                        required/>
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
                        required/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={form.dateOfBirth.split('T')[0]}
                        onChange={(e) => setForm({...form, dateOfBirth: e.target.value})}
                        className={styles.formControl}/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={(e) => setForm({...form, role: Number(e.target.value)})}
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
                        placeholder="Enter Phone Number"/>
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
                                <td>{phoneNumber.number}</td>
                                <td>
                                    <button type="button" onClick={() => handleRemovePhoneNumber(index)}
                                            className={`${styles.btn} ${styles.btnDanger}`}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                <button type="submit" className={styles.btn}>{id ? 'Update Employee' : 'Add Employee'}</button>
            </form>
        </div>
    );
}