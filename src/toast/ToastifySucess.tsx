import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastifySuccessProps {
    message: string;
}

const ToastifySuccess: React.FC<ToastifySuccessProps> = ({ message }) => {
    React.useEffect(() => {
        const toastId = toast.success(message);
        return () => toast.dismiss(toastId);
    }, [message]);

    return <ToastContainer/>; // Since we're using toast, we don't need to render anything in this component
};

export default ToastifySuccess;
