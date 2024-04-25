import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import MessageLayout from "./layouts/MessageLayout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Courses from "./pages/Courses";
import StartLearning from "./pages/Start-Learning";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleCourse from "./pages/Single-course";
import WatchVideos from "./pages/Watch-videos";
import Message from "./pages/Messages";
import InstructorHome from "./pages/Instructor-home";
import CreateCourseTitle from "./pages/Instructor-course-title";
import CreateCourse from "./pages/Instructor-create-course";
import CreateChapter from "./pages/Instructor-create-chapter";
import Payment from "./pages/Payment";
import { useEffect } from "react";
import { useUserContext } from "./context/userContext";

import { verify } from "./api/api";
import ConvertInstructor from "./pages/Convert-instructor";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectInstructorRoute from "./components/ProtectInstructorRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const { user, setUser } = useUserContext();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const data = await verify();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (!user) verifyUser();
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",

            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/carts",
                    element: (
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    ),
                },

                {
                    path: "/start-learning",
                    element: (
                        <ProtectedRoute>
                            <StartLearning />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/videos/:id",
                    element: (
                        <ProtectedRoute>
                            <WatchVideos />
                        </ProtectedRoute>
                    ),
                },

                {
                    path: "/courses",

                    children: [
                        {
                            path: "",
                            element: <Courses />,
                        },
                        {
                            path: "payment/:id",
                            element: (
                                <ProtectedRoute>
                                    {" "}
                                    <Payment />
                                </ProtectedRoute>
                            ),
                        },
                        {
                            path: ":id",
                            element: <SingleCourse />,
                        },
                    ],
                },
                {
                    path: "/convert-instructor",
                    element: (
                        <ProtectedRoute>
                            {" "}
                            <ConvertInstructor />
                        </ProtectedRoute>
                    ),
                },

                {
                    path: "/instructor",
                    element: (
                        <ProtectInstructorRoute>
                            <InstructorHome />
                        </ProtectInstructorRoute>
                    ),
                },
                {
                    path: "/instructor/payment",
                    element: <Payment />,
                },
                {
                    path: "/instructor/create-course-title",
                    element: (
                        <ProtectInstructorRoute>
                            {" "}
                            <CreateCourseTitle />
                        </ProtectInstructorRoute>
                    ),
                },
                {
                    path: "/instructor/create-course/:id",
                    element: (
                        <ProtectInstructorRoute>
                            <CreateCourse />
                        </ProtectInstructorRoute>
                    ),
                },
                {
                    path: "/instructor/create-chapter/:id",
                    element: (
                        <ProtectInstructorRoute>
                            <CreateChapter />
                        </ProtectInstructorRoute>
                    ),
                },

                {
                    path: "/auth",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "login",
                            element: <Login />,
                        },
                        {
                            path: "signup",
                            element: <Signup />,
                        },
                    ],
                },
            ],
        },
        {
            path: "/messages",
            element: <MessageLayout />,
            children: [
                {
                    path: "",
                    element: (
                        <ProtectedRoute>
                            {" "}
                            <Message />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]);
    return (
        <session>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </session>
    );
}

export default App;
