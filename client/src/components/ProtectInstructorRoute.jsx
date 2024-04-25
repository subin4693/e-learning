import React, { useEffect, useState } from "react";
import { useUserContext } from "@/context/userContext";
import { Navigate } from "react-router-dom";
import { verify } from "../api/api";

const ProtectInstructorRoute = ({ children }) => {
    const { user, setUser } = useUserContext();
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    useEffect(() => {
        const verify = async () => {
            try {
                const data = await verifyUser();
                setUser(data);
            } catch (error) {
                console.error("Error verifying user:", error);
            } finally {
                setIsLoading(false); // Set loading to false after API call
            }
        };

        verify(); // Call verify on component mount
    }, []);

    // Handle loading state and redirect if necessary
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (user && user.role == "user")
        return <Navigate to="/convert-instructor" />;

    return <div>{children}</div>;
};

export default ProtectInstructorRoute;
