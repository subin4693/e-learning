import { updateCourseDetails } from "@/api/api";
import { Button } from "@/components/ui/button";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

import { Image, Pencil, PictureInPicture } from "lucide-react";
import React, { useState } from "react";

const CourseImage = ({ courseImage, setCourseImage, id }) => {
    const [input, setInput] = useState();

    const updateImageUrl = async (url) => {
        try {
            const data = await updateCourseDetails(id, { image: url });

            setCourseImage(data.image);

            toggleEdit();
        } catch (error) {
            console.log(error);
        }
    };

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
                    updateImageUrl(downloadURL);
                });
            }
        );
    };

    return (
        <div className="bg-secondary rounded-md p-3  ">
            <div className="font-medium flex justify-between items-center mb-2">
                Course image
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
                            Add an image
                        </label>
                    </>
                </Button>
            </div>
            {courseImage ? (
                <>
                    <img
                        src={courseImage}
                        alt="course img"
                        className="object-cover mx-auto"
                    />
                </>
            ) : (
                <div className=" rounded-md ">
                    <Image className="w-[18rem] h-[18rem] mx-auto text-stone-200 dark:text-stone-700" />
                </div>
            )}
        </div>
    );
};

export default CourseImage;
