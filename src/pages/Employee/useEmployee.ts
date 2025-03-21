import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserResponse} from "../../interfaces/response/UserResponse";
import {PagedList} from "../../interfaces/types/PagedList";
import categoriasService from "../../services/userService";
import userService from "../../services/userService";

export default function useEmployee() {

    const [users, setUsers] = useState<UserResponse[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            const response: PagedList<UserResponse> = await categoriasService.getListAsync({ page });
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
        userService.deleteUserAsync(userId);
        navigate("/employee/manage");
    };
    
    return {users, handleAddNew, handleEdit, handleDelete, page, totalPages, handlePrevious, handleNext}
}