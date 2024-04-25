import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import VideoPlayer from "./VideoPlayer";
import { getSinglePurcheasedCourse } from "@/api/api";
import { useParams } from "react-router-dom";

const WatchVideos = () => {
    const [videoIndex, setVideoIndex] = useState(0);
    const [course, setCourse] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getSingleCourse = async () => {
            try {
                const course = await getSinglePurcheasedCourse(id);

                setCourse(course);
            } catch (error) {
                console.log(error);
            }
        };
        getSingleCourse();
    }, []);

    const data = {
        title: "MERN Stack LMS/ Learning Management system series with javascript",
        videos: [
            {
                title: "Introduction",
                video: video1,
            },
            {
                title: "Deep dive",
                video: video2,
            },
            {
                title: "Elploring basic",
                video: video1,
            },
            {
                title: "Exploging oops concepts",
                video: video2,
            },
            {
                title: "Basics of Ds",
                video: video1,
            },
            {
                title: "Advanced concepts in Ds",
                video: video2,
            },
            {
                title: "Outro",
                video: video1,
            },
        ],
    };
    return (
        <div className="flex">
            <div className="w-1/4 ">
                <Sidebar
                    videos={course?.courseId?.chapters}
                    videoIndex={videoIndex}
                    setVideoIndex={setVideoIndex}
                    title={course?.courseId?.title}
                />
            </div>
            <div className="w-3/4">
                <VideoPlayer
                    videos={course?.courseId?.chapters}
                    videoIndex={videoIndex}
                    setVideoIndex={setVideoIndex}
                    title={course?.courseId?.title}
                />
            </div>
        </div>
    );
};

export default WatchVideos;
