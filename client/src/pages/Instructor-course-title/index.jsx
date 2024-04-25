import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { createCourse } from "@/api/api";
import { toast } from "react-toastify";

const CreateCourseTitle = () => {
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    const handleCreateTitle = async () => {
        try {
            const data = await createCourse(title);

            navigate("/instructor/create-course/" + data._id);
        } catch (error) {
            toast("Try again later");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <Card>
                <CardHeader>
                    <h1>Name your course</h1>
                    <CardDescription>
                        <p>
                            What would you like to name you course? don't worry,
                            you can change this later.
                        </p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        placeholder='e.g:"Advanced web development"'
                        vlaue={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <CardDescription>
                        What will you teach in this course?
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost">Cancel</Button> &nbsp;&nbsp;
                    <Button
                        onClick={handleCreateTitle}
                        disabled={title.length <= 0 && true}
                    >
                        Continue
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CreateCourseTitle;
