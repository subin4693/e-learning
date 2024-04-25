import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";

import React, { useEffect, useState } from "react";

const DescriptionForm = ({ courseDescription, setCourseDescription }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = () => {
        setCourseDescription(input);

        // setCourseTitle(input);
        toggleEdit();
    };

    useEffect(() => {
        setInput(courseDescription);
    }, [courseDescription]);

    return (
        <div className="bg-secondary rounded-md p-3">
            <div className="font-medium flex justify-between items-center mb-2">
                Course description
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
                        <Button className="mt-3" onClick={handleSave}>
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
