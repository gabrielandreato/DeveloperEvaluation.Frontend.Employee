import {useEffect, useState} from "react";
import {CreateUserRequest} from "../../../interfaces/request/CreateUserRequest";
import {useNavigate, useParams} from "react-router-dom";
import {CreatePhoneNumberRequest} from "../../../interfaces/request/CreatePhoneNumberRequest";
import {UserResponse} from "../../../interfaces/response/UserResponse";
import userService from "../../../services/userService";

interface ApiError {
    propertyName: string;
    errorMessage: string;
    attemptedValue?: any; 
    customState?: any;    
    severity?: number;
    errorCode?: string;
}

export function useAddEmployee() {
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
        dateOfBirth: '',
        role: 1,
    });

    const {id} = useParams();
    const navigate = useNavigate();

    const [newPhoneNumber, setNewPhoneNumber] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                try {
                    const userData = await userService.getAsync(parseInt(id));
                    if (userData) {
                        setForm({
                            userName: userData.userName,
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            password: '',
                            rePassword: '',
                            dateOfBirth: userData.dateOfBirth,
                            email: userData.email,
                            role: Number(userData.role),
                            managerId: userData.managerId,
                            phoneNumbers: userData.phoneNumbers,
                            documentNumber: userData.documentNumber
                        });
                    }
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                }
            }
        };
        fetchUser();
    }, [id]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
        }
    };

    const handleRemovePhoneNumber = (index: number) => {
        setForm(prevState => ({
            ...prevState,
            phoneNumbers: prevState.phoneNumbers.filter((_, i) => i !== index)
        }));
    };

    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            if (id === null || id === undefined) {
                await userService.createAsync(form);
                navigate('/employee/manage');
            } else {
                await userService.updateAsync(id!, form);
                navigate('/employee/manage');
            }
        } catch (error: any) {
            if (error.response && error.response.data && Array.isArray(error.response.data)) {
                const messages = error.response.data.map((err: ApiError) => err.errorMessage);
                setErrorMessages(messages);
            } else {
                setErrorMessages(["Unknown error occurred."]);
            }
        }
    };

    const [managers, setManagers] = useState<UserResponse[]>([]);

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const response = await userService.getListAsync({})
                setManagers(response?.items);
            } catch (e) {
                
            }
        }
        
        fetchManagers();
    }, [])
    
    return {
        form,
        setForm,
        handleChange,
        handleAddPhoneNumber,
        handleRemovePhoneNumber,
        handleSubmit,
        id,
        newPhoneNumber,
        setNewPhoneNumber,
        managers,
        navigate,
        errorMessages
    };

}