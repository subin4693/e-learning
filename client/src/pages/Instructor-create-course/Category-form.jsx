import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getAllCategorys, updateCourseDetails } from "@/api/api";

const CategoryForm = ({ courseCategory, setCourseCategory, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState("");

    const [allCategorys, setAllCategorys] = useState([]);

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = async () => {
        try {
            const data = await updateCourseDetails(id, { category: input });

            setCourseCategory(data.category.category);
            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput(courseCategory);
    }, [courseCategory]);

    useEffect(() => {
        const getCategorys = async () => {
            try {
                const res = await getAllCategorys();

                setAllCategorys(res);
            } catch (error) {
                console.log(error);
            }
        };
        getCategorys();
    }, []);

    return (
        <div className="bg-secondary rounded-md p-3">
            <div className="font-medium flex justify-between items-center mb-2">
                Course category
                <Button variant="ghost" onClick={toggleEdit}>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit category
                        </>
                    )}
                </Button>
            </div>
            <div>
                {isEditing ? (
                    <>
                        <Select onValueChange={(e) => setInput(e)}>
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={
                                        courseCategory
                                            ? courseCategory
                                            : "Select a category"
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent>
                                {allCategorys.map((cat) => (
                                    <SelectItem value={cat._id} key={cat._id}>
                                        {cat.category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button className="mt-3" onClick={handleSave}>
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        {courseCategory.length ? (
                            <p>{courseCategory}</p>
                        ) : (
                            <p className="text-sm text-muted-foreground italic">
                                No Category Selected
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CategoryForm;
