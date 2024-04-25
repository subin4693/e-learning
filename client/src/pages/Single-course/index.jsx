import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import VideosDetails from "./VideosDetails";
import { useParams } from "react-router-dom";
import { addToCart, enrollCourse, getSingleCourse } from "@/api/api";
import { toast } from "react-toastify";

const SingleCourse = () => {
    const [course, setCourse] = useState({});

    const { id } = useParams();

    const addCourseToCart = async () => {
        try {
            const res = await addToCart({ courseid: id });
            toast.success("Added to cart");
        } catch (error) {
            console.log(error);
            toast.error("Already in cart");
        }
    };

    useEffect(() => {
        const getCourseDetails = async () => {
            try {
                const data = await getSingleCourse(id);

                console.log(data);
                setCourse(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCourseDetails();
    }, []);

    return (
        <div className="flex min-h-[70vh]">
            <div className="w-2/3 pr-10">
                <CourseDetails course={course} />
            </div>
            <div className="w-1/3">
                <VideosDetails
                    course={course}
                    addCourseToCart={addCourseToCart}
                    id={id}
                />
            </div>
        </div>
    );
};

export default SingleCourse;
