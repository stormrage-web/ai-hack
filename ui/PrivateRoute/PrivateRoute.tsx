import { Navigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../../contexts/UserContext.ts";
import Layout from "../Layout/Layout.tsx";

const PrivateRoute = () => {
    const { loading } = useContext(UserContext);

    if (loading) {
        return <div>Checking auth...</div>;
    }
    if (localStorage.getItem('access_token')?.length) {
        return <Layout/>
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;