import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Book } from "lucide-react";
import { getAllEnrolledCourses } from "@/api/api";
const StartLearning = () => {
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await getAllEnrolledCourses();

                setCourses(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCourses();
    }, []);
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 my-10 h-[80vh]">
                {courses.map((course) => (
                    <Card
                        className="h-fit"
                        onClick={() =>
                            navigate(
                                "/videos/" + course.courseId._id.toString(),
                            )
                        }
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
                                className="w-full"
                            />
                            <br />
                            <CardDescription className="line-clamp-2">
                                {course.courseId.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start text-sm">
                            <div className="flex justify-center items-center mb-3 text-sm text-muted-foreground">
                                <Book className="h-5 w-5" /> &nbsp;
                                {course.courseId.chapters.length} chapters
                            </div>
                            {/*<Progress
                            //     value={course.progress}
                            //     className="h-2 mb-3"
                            // />
                            // {course.progress} % Complete*/}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default StartLearning;
