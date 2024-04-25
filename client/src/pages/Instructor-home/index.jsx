import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link2 } from "lucide-react";
import { getAllCoursesForInstructor } from "@/api/api";

const AdminHome = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getAllCourses = async () => {
            try {
                const res = await getAllCoursesForInstructor();
                setCourses(res);
            } catch (error) {
                console.log(error);
            }
        };
        getAllCourses();
    }, []);

    return (
        <div className="min-h-[70vh]">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Hello 'Subin'
                </h1>
                <Link to="create-course-title">
                    <Button variant="outline">Create Course</Button>
                </Link>
            </div>
            <Table>
                <TableCaption>A list of your courses.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {courses?.map((course) => (
                        <TableRow key={course.name}>
                            <TableCell className="font-medium">
                                {course.published
                                    ? "Published"
                                    : "Not Published"}
                            </TableCell>
                            <TableCell>
                                {course?.category?.category
                                    ? course?.category?.category
                                    : "-"}
                            </TableCell>
                            <TableCell>{course.title}</TableCell>
                            <TableCell className="text-right">
                                {course?.price ? course?.price : "-"}
                            </TableCell>
                            <TableCell className="text-right">
                                <Link
                                    to={`/instructor/create-course/${course._id}`}
                                >
                                    <Link2 />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminHome;
