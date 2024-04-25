import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const PopularCourses = ({ courses }) => {
    return (
        <div className="  mt-10 rounded-md   ">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Popular Courses
            </h2>
            <br />
            <div className="grid grid-cols-3 gap-5">
                {courses.map((course) => (
                    <Card>
                        <CardHeader>
                            <CardTitle className="line-clamp-1">
                                {course.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <img
                                src={course.image}
                                alt="banner"
                                className="w-full  h-[250px] object-cover"
                            />
                            <br />
                            <CardDescription className="line-clamp-2">
                                {course.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link to={`courses/${course._id}`}>
                                    View Course
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
