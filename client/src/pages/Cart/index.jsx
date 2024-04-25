import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContext";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCartItems } from "@/api/api";
const Cart = () => {
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        const getCartCourses = async () => {
            try {
                const data = await getCartItems();
                console.log(data);
                setCourses(data);
            } catch (error) {
                console.log(error);
            }
        };

        getCartCourses();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-5 my-10 min-h-[70vh]">
            {courses &&
                courses.map((course) => (
                    <Card
                        onClick={() =>
                            navigate(
                                "/courses/" + course.courseId._id.toString()
                            )
                        }
                        className="h-fit"
                    >
                        <CardHeader>
                            <CardTitle className="line-clamp-1">
                                {course.courseId.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={course.courseId.image}
                                alt="banner"
                                className="w-full  h-[250px] object-cover"
                            />
                            <br />
                            <CardDescription className="line-clamp-2">
                                {course.courseId.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start ">
                            <div className="flex justify-center items-center mb-2 text-sm text-muted-foreground">
                                <Book className="h-5 w-5" /> &nbsp;5 chapters
                            </div>
                            <b>$ 40</b>
                            {/* {user && (
                                <Button onClick={() => {}}>Add To Cart</Button>
                            )} */}
                        </CardFooter>
                    </Card>
                ))}
        </div>
    );
};

export default Cart;
