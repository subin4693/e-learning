import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { badgeVariants } from "@/components/ui/badge";

import Searchbar from "./Searchbar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useUserContext } from "@/context/userContext";
import { Book } from "lucide-react";
import { getAllCategorys, getAllCourses } from "@/api/api";
import PaginationButton from "./PaginationButton";

const Courses = () => {
    const [categorys, setCategorys] = useState([]);
    const [courses, setCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user } = useUserContext();

    const cat = searchParams.get("cat");
    const pg = searchParams.get("page");

    const addtoCart = (e) => {
        e.stopPropagation();
    };

    const getCourses = async (limit, page, category) => {
        try {
            const data = await getAllCourses(limit, page, category);
            setCourses(data.courses);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (cat);
        getCourses(null, pg, cat);
    }, [cat]);

    useEffect(() => {
        if (pg);
        getCourses(1, pg);
    }, [pg]);

    useEffect(() => {
        const getCategorys = async () => {
            try {
                const data = await getAllCategorys();
                setCategorys(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategorys();
    }, []);

    useEffect(() => {
        getCourses(10);
    }, []);

    return (
        <div>
            <Searchbar />
            <div className="flex justify-between items-center mt-10">
                {categorys.map((data) => (
                    <Link
                        to={`?cat=${data._id}`}
                        className={badgeVariants({ variant: "" })}
                    >
                        {data.category}
                    </Link>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-5 my-10">
                {courses.map((course) => (
                    <Card onClick={() => navigate(course._id.toString())}>
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

                        <CardFooter className="flex flex-col items-start ">
                            <div className="flex justify-center items-center mb-2 text-sm text-muted-foreground">
                                <Book className="h-5 w-5" /> &nbsp;
                                {course.chapters.length} chapters
                            </div>
                            <b>$ {course.price}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="mb-5">
                {!cat && (
                    <PaginationButton
                        totalPages={totalPages}
                        setSearchParams={setSearchParams}
                        currentPage={pg}
                    />
                )}
            </div>
        </div>
    );
};

export default Courses;
