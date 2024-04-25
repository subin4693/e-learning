import { LayoutDashboard } from "lucide-react";
import React, { useEffect, useState } from "react";

import CourseImage from "./Course-image";
import CategoryForm from "./Category-form";
import LearningForm from "./Learning-form";
import PrerequistiesForm from "./Prerequisties-form";
import CourseChapter from "./Course-chapter";
import { Button } from "@/components/ui/button";
import CoursePrice from "./Course-price";
import DescriptionForm from "@/components/Description-form";
import TitleForm from "@/components/Title-form";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCourse, updateCourseDetails } from "@/api/api";
import { toast } from "react-toastify";

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [learning, setLearning] = useState([]);
    const [prerequisties, setPrerequisties] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [price, setPrice] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    const publishCourse = async () => {
        try {
            const data = await updateCourseDetails(id, { published: true });
            navigate("/instructor");

            toast("Course published successfully");
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const getCourse = async (id) => {
            try {
                const course = await getSingleCourse(id);

                setTitle(course.title);
                setDescription(course?.description || "");
                setImage(course?.image || "");
                setCategory(course?.category?.category || "");
                setLearning(course.learnings);
                setPrerequisties(course.prerequisties);
                setChapters(course.chapters);
                setPrice(course?.price || 0);
            } catch (error) {
                console.log(error);
            }
        };

        getCourse(id);
    }, []);

    return (
        <div className=" my-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold leading-none tracking-tight">
                        Course setup
                    </h1>
                    <span className="text-sm text-muted-foreground">
                        Complete all fields (1 / 5)
                    </span>
                </div>
                <Button onClick={publishCourse}>Publish</Button>
            </div>

            <div className="flex justify-between  mt-5 gap-5">
                <div className="  flex-1 space-y-5">
                    <span className="flex gap-2">
                        <LayoutDashboard />
                        <h2 className="text-xl font-medium leading-none tracking-tight">
                            Customize you course
                        </h2>
                    </span>
                    <TitleForm
                        heading={"Course title"}
                        courseTitle={title}
                        setCourseTitle={setTitle}
                        id={id}
                    />
                    <DescriptionForm
                        heading={"Course description"}
                        courseDescription={description}
                        setCourseDescription={setDescription}
                        id={id}
                    />
                    <LearningForm
                        courseLearning={learning}
                        setCourseLearning={setLearning}
                        id={id}
                    />
                    <PrerequistiesForm
                        prerequisties={prerequisties}
                        setPrerequisties={setPrerequisties}
                        id={id}
                    />

                    <CourseImage
                        courseImage={image}
                        setCourseImage={setImage}
                        id={id}
                    />
                    <CategoryForm
                        courseCategory={category}
                        setCourseCategory={setCategory}
                        id={id}
                    />
                </div>
                <div className=" flex-1 space-y-5">
                    <CourseChapter
                        chapters={chapters}
                        setChapters={setChapters}
                        id={id}
                    />
                    <CoursePrice
                        coursePrice={price}
                        setCoursePrice={setPrice}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateCourse;
