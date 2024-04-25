import { Button } from "@/components/ui/button";
import { Book, BookDashed, Pencil, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseChapter = ({ chapters, setChapters }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    return (
        <>
            <span className="flex gap-2">
                <BookDashed />
                <h2 className="text-xl font-medium leading-none tracking-tight">
                    Course chapters
                </h2>
            </span>
            <div className="bg-secondary rounded-md p-3 mt-5">
                <div className="font-medium flex justify-between items-center mb-2">
                    Course chapters
                    <Button variant="ghost" onClick={toggleEdit} asChild>
                        {isEditing ? (
                            <>Cancel</>
                        ) : (
                            <Link
                                to={`/instructor/create-chapter/${id}`}
                                className="flex items-center"
                            >
                                <PlusCircle className="h-4 w-4 mr-1" />
                                Add a chapter
                            </Link>
                        )}
                    </Button>
                </div>
                <div>
                    {chapters.map((chapter) => (
                        <div className="flex items-center justify-between  p-3  rounded-md hover:bg-stone-300 dark:hover:bg-stone-900">
                            <span className="flex items-center gap-3">
                                <Book />
                                {chapter.title}
                            </span>
                            <Button asChild variant="secondary">
                                <Link
                                    to={`/instructor/create-chapter/${id}?chapter=${chapter._id}`}
                                >
                                    <Pencil className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseChapter;
