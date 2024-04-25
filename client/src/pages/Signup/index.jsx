import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signup } from "../../api/api";
import { useUserContext } from "@/context/userContext";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((!name, !email || !password)) return toast("Fill all the field");
        else if (password.length < 8)
            return toast("Password must have minimum 8 characters.");
        let id;
        try {
            id = toast.loading("Please wait...");
            const userData = await signup({ name, email, password });
            toast.update(id, {
                render: "All is good",
                type: "success",
                isLoading: false,
                autoClose: true,
                closeOnClick: true,
            });
            setUser(userData);
            navigate("/");
        } catch (error) {
            toast.update(id, {
                render: "Try again later",
                type: "error",
                isLoading: false,
                autoClose: true,
                closeOnClick: true,
            });
            console.log(error);
        }
    };

    return (
        <div className="h-full  w-full grid place-items-center">
            <div>
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5 w-[400px]">
                        <Input
                            type="text"
                            placeholder="User name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                    <Button onClick={handleSubmit}>Signup</Button>

                    <CardDescription className="mt-5">
                        Alredy have an account{" "}
                        <Link to="/auth/login" className="underline">
                            login
                        </Link>
                    </CardDescription>
                </CardFooter>
            </div>
        </div>
    );
};

export default Signup;
