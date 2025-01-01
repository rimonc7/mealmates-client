import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const axiosInstance = axios.create({
    baseURL: 'https://meal-mates-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                logOutUser()
                    .then(() => {
                        console.log('Logout User');
                        navigate('/login')
                    })
                    .catch(error => console.log(error));
            }

            return Promise.reject(error);
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;