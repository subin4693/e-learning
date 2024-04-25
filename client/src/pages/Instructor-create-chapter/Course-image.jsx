import { Button } from "@/components/ui/button";
import { Image, Pencil, PictureInPicture } from "lucide-react";
import React, { useState } from "react";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { Progress } from "@/components/ui/progress";

const CourseImage = ({ courseVideo, setCourseVideo }) => {
    const [prog, setProg] = useState(0);
    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProg(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setCourseVideo(downloadURL);
                    setProg(0);
                });
            }
        );
    };

    return (
        <div className="bg-secondary rounded-md p-3   ">
            <div className="font-medium flex justify-between items-center mb-2">
                Course video
                <Button variant="ghost">
                    <>
                        <input
                            type="file"
                            id="image"
                            className="hidden"
                            onChange={handleUploadImage}
                        />
                        <label htmlFor="image" className="flex items-center">
                            <Pencil className="h-4 w-4 mr-1" />
                            Add an video
                        </label>
                    </>
                </Button>
            </div>
            {courseVideo ? (
                <>
                    <video
                        src={courseVideo}
                        className="object-cover mx-auto"
                        controls
                    />
                </>
            ) : (
                <div className=" rounded-md ">
                    <Image className="w-[18rem] h-[18rem] mx-auto text-stone-200 dark:text-stone-700" />
                </div>
            )}
            {prog > 0 && (
                <>
                    Uploading : {Math.floor(prog)}%
                    <Progress value={prog} className="w-full mt-3" />
                </>
            )}
        </div>
    );
};

export default CourseImage;
