import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

import { Navigate } from 'react-router-dom';
import {JSX} from "react";
import ManageEmployees from "./pages/Employee";
import AddEmployee from "./pages/Employee/AddEmployee";
import DefaultPage from "./components/DefaultPage";

function PrivateRoute({ children }: { children: JSX.Element }) {
    const authToken = localStorage.getItem('authToken');
    return authToken ? children : <Navigate to="/" />;
}



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employee" element={<PrivateRoute><DefaultPage /></PrivateRoute>}>
                    <Route path="manage" element={<ManageEmployees />} />
                    <Route path="add" element={<AddEmployee />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}