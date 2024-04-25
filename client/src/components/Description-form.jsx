import { updateCourseDetails } from "@/api/api";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";

import React, { useEffect, useState } from "react";

const DescriptionForm = ({
    heading,
    courseDescription,
    setCourseDescription,
    id,
    isChapter,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = async () => {
        if (isChapter) {
            setCourseDescription(input);
            toggleEdit();
            return;
        }
        try {
            const data = await updateCourseDetails(id, { description: input });
            setCourseDescription(data.description);

            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput(courseDescription);
    }, [courseDescription]);

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
                            Edit description
                        </>
                    )}
                </Button>
            </div>
            <div>
                {isEditing ? (
                    <>
                        <Textarea
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
                        {courseDescription.length ? (
                            <p>{courseDescription}</p>
                        ) : (
                            <p className="text-sm text-muted-foreground italic">
                                No Description
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default DescriptionForm;
