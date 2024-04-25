import { updateCourseDetails } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

const PrerequistiesForm = ({ prerequisties, setPrerequisties, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    function toggleEdit() {
        setIsEditing((prev) => !prev);
    }
    const handleSave = async () => {
        try {
            const data = await updateCourseDetails(id, {
                prerequisties: input,
            });
            setPrerequisties(data.prerequisties);

            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput(prerequisties);
    }, [prerequisties]);
    return (
        <div className="bg-secondary rounded-md p-3">
            <div className="font-medium flex justify-between items-center mb-2">
                Prerequisties for this course
                <Button variant="ghost" onClick={toggleEdit}>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit Contents
                        </>
                    )}
                </Button>
            </div>
            <div>
                {isEditing ? (
                    <div className="space-y-2">
                        {input.map((learning, index) => (
                            <div className="flex items-center gap-2">
                                {" "}
                                <Input
                                    type="text"
                                    value={learning}
                                    onChange={(e) => {
                                        const newLearning = [...input];
                                        newLearning[index] = e.target.value;
                                        setInput(newLearning);
                                    }}
                                />
                                <Trash
                                    className="pointer"
                                    onClick={() => {
                                        const newLearning = [...input];
                                        newLearning.splice(index, 1);
                                        setInput(newLearning);
                                    }}
                                />
                            </div>
                        ))}

                        <Button
                            className="mt-3 mr-3"
                            onClick={() => setInput([...input, ""])}
                        >
                            Add
                        </Button>
                        <Button
                            className="mt-3"
                            onClick={handleSave}
                            disabled={input.length === 0}
                        >
                            Save
                        </Button>
                    </div>
                ) : (
                    <>
                        {prerequisties.length ? (
                            prerequisties.map((learn) => <p>{learn}</p>)
                        ) : (
                            // {courseLearning.map((learning)=><p>{learning}</p>)}
                            <p className="text-sm text-muted-foreground italic">
                                No prerequisties provided
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PrerequistiesForm;
