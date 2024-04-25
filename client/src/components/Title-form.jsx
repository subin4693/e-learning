import { updateCourseDetails } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

import React, { useEffect, useState } from "react";

const TitleForm = ({ heading, courseTitle, setCourseTitle, id, isChapter }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = async () => {
        if (isChapter) {
            setCourseTitle(input);
            toggleEdit();

            return;
        }
        try {
            const data = await updateCourseDetails(id, { title: input });
            setCourseTitle(data.title);

            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput(courseTitle);
    }, [courseTitle]);

    return (
        <div className="bg-secondary rounded-md p-3">
            <div className="font-medium flex justify-between items-center mb-2">
                {heading}
                <Button variant="ghost" onClick={toggleEdit}>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit title
                        </>
                    )}
                </Button>
            </div>
            <div>
                {isEditing ? (
                    <>
                        <Input
                            type="text"
                            placeholder="e.g. Advanced web development"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button
                            className="mt-3"
                            onClick={handleSave}
                            disabled={input.length === 0}
                        >
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        {courseTitle?.length ? (
                            <p>{courseTitle}</p>
                        ) : (
                            <p className="text-sm text-muted-foreground italic">
                                No Title
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default TitleForm;
