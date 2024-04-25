import { Button } from "@/components/ui/button";
import { Eye, LayoutDashboard, Video, VideoIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import DescriptionForm from "@/components/Description-form";
import TitleForm from "@/components/Title-form";
import PreviewForm from "./Preview-form";
import CourseImage from "./Course-image";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
    createChapter,
    getSingleChapters,
    updateChapterDetails,
} from "@/api/api";

const CreateChapter = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [freePreview, setFreePreview] = useState(true);

    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const chapter = searchParams.get("chapter");

    const publishChapter = async () => {
        const res = await createChapter(
            { title, description, freePreview, video },
            id
        );
        navigate(-1);
    };

    const updateChapter = async () => {
        const res = await updateChapterDetails(id, chapter, {
            title,
            description,
            freePreview,
            video,
        });
        navigate(-1);
    };

    useEffect(() => {
        const getChapterDetails = async () => {
            try {
                const res = await getSingleChapters(chapter);

                setTitle(res.title);
                setDescription(res.description);
                setVideo(res.video);
                setFreePreview(res.freePreview);
            } catch (error) {
                console.log(error);
            }
        };

        if (chapter) {
            getChapterDetails();
        }
    }, []);

    return (
        <div className="my-5 min-h-[70vh]">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold leading-none tracking-tight">
                        Course setup
                    </h1>
                    <span className="text-sm text-muted-foreground">
                        Complete all fields (1 / 5)
                    </span>
                </div>
                {chapter ? (
                    <Button onClick={updateChapter}>Update</Button>
                ) : (
                    <Button onClick={publishChapter}>Publish</Button>
                )}
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
                        heading={"Chapter title"}
                        courseTitle={title}
                        setCourseTitle={setTitle}
                        isChapter={true}
                    />
                    <DescriptionForm
                        heading={"Chapter description"}
                        courseDescription={description}
                        setCourseDescription={setDescription}
                        isChapter={true}
                    />

                    <span className="flex gap-2">
                        <Eye />
                        <h2 className="text-xl font-medium leading-none tracking-tight">
                            Access settigns
                        </h2>
                    </span>
                    <PreviewForm
                        freePreview={freePreview}
                        setFreePreview={setFreePreview}
                    />
                </div>
                <div className="  flex-1 space-y-5">
                    <span className="flex gap-2">
                        <VideoIcon />
                        <h2 className="text-xl font-medium leading-none tracking-tight">
                            Add a video
                        </h2>
                    </span>
                    <CourseImage
                        courseVideo={video}
                        setCourseVideo={setVideo}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateChapter;
