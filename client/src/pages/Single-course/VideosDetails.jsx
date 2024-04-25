import React, { useState } from "react";
import { CirclePlay, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/userContext";
import { Link } from "react-router-dom";

const VideosDetails = ({ course, addCourseToCart, id }) => {
    const { user } = useUserContext();

    return (
        <div>
            <div>
                {course && course.chapters && course.chapters[0] && (
                    <video
                        src={course.chapters[0].video}
                        className="w-full mb-5"
                        controls
                        auto
                        Play
                    ></video>
                )}
            </div>

            <div className="mt-5 space-x-5">
                {user && (
                    <>
                        <Button asChild>
                            <Link to={`/courses/payment/${id}`}>
                                Enroll for &#8377;{course?.price}
                            </Link>
                        </Button>
                        <Button onClick={addCourseToCart}>Add to cart</Button>
                    </>
                )}
            </div>
            <ul className="my-5 space-y-5">
                {course?.chapters?.map((detail, index) => (
                    <li
                        className={cn(
                            "flex items-center hover:bg-secondary p-2 rounded-md",
                            index === 0 && "bg-secondary"
                        )}
                        key={index}
                    >
                        {detail?.video || course?.isBuyed ? (
                            <CirclePlay />
                        ) : (
                            <Lock />
                        )}
                        &nbsp; &nbsp;
                        {detail?.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideosDetails;
