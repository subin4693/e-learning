import { cn } from "@/lib/utils";
import { CheckCircle, CornerRightDown, PlayCircle } from "lucide-react";
import React from "react";

const Sidebar = ({ videos, videoIndex, setVideoIndex, title }) => {
    return (
        <div>
            <ul className="my-5 space-y-1 border-r min-h-[85vh] pr-1">
                <li
                    className={cn(
                        " flex items-center   p-2 rounded-md font-bold "
                    )}
                >
                    0% complete
                </li>
                {videos &&
                    videos.map(({ title }, index) => (
                        <li
                            className={cn(
                                " flex items-center hover:bg-secondary p-2 rounded-md cursor-pointer",
                                videoIndex === index && "bg-secondary ml-5"
                            )}
                            key={index}
                            onClick={() => setVideoIndex(index)}
                        >
                            {videoIndex <= index ? (
                                <PlayCircle />
                            ) : (
                                <CheckCircle />
                            )}
                            &nbsp;{title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Sidebar;
