import React from "react";

import { ModeToggle } from "./mode-toggle";

import { useUserContext } from "@/context/userContext";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { LogIn } from "lucide-react";
import { logout } from "@/api/api";

const Navbar = () => {
    const { user, setUser } = useUserContext();

    const handleLogout = async () => {
        try {
            const res = await logout();
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="flex justify-between items-center py-5">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                        ? "underline text-black dark:text-white"
                        : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            </NavLink>

            <div className="flex justify-center items-center gap-10">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "underline text-black dark:text-white"
                            : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/courses?page=1"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "underline text-black dark:text-white"
                            : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                    }
                >
                    Courses
                </NavLink>
                {user ? (
                    <>
                        {" "}
                        <NavLink
                            to="/carts"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-black dark:text-white"
                                    : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                            }
                        >
                            Cart
                        </NavLink>
                        <NavLink
                            to="/start-learning"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-black dark:text-white"
                                    : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                            }
                        >
                            Start learning
                        </NavLink>
                        <NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-black dark:text-white"
                                    : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                            }
                        >
                            Messages
                        </NavLink>
                        <NavLink
                            to="/instructor"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "underline text-black dark:text-white"
                                    : "dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white transition-all"
                            }
                        >
                            Instructor
                        </NavLink>
                    </>
                ) : (
                    <NavLink to="/auth/login">
                        <Button>Login</Button>
                    </NavLink>
                )}

                <ModeToggle />
                {user && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleLogout}
                    >
                        <LogIn className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
