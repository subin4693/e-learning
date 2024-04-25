import { updateCourseDetails } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, Pencil, PrinterIcon } from "lucide-react";

import React, { useEffect, useState } from "react";

const CoursePrice = ({ coursePrice, setCoursePrice, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = async () => {
        try {
            const data = await updateCourseDetails(id, { price: input });
            setCoursePrice(data.price);

            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput(coursePrice);
    }, [coursePrice]);

    return (
        <>
            <span className="flex gap-2">
                <IndianRupee />
                <h2 className="text-xl font-medium leading-none tracking-tight">
                    Sell your course
                </h2>
            </span>
            <div className="bg-secondary rounded-md p-3">
                <div className="font-medium flex justify-between items-center mb-2">
                    Course price
                    <Button variant="ghost" onClick={toggleEdit}>
                        {isEditing ? (
                            <>Cancel</>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-1" />
                                Edit price
                            </>
                        )}
                    </Button>
                </div>
                <div>
                    {isEditing ? (
                        <>
                            <Input
                                type="number"
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
                            {coursePrice > 0 ? (
                                <p>&#8377; &nbsp;{coursePrice}</p>
                            ) : (
                                <p className="text-sm text-muted-foreground italic">
                                    No price
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default CoursePrice;
