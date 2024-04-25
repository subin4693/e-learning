import { Button } from "@/components/ui/button";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videos, videoIndex, title }) => {
    return (
        <div className="pl-20 ">
            <h1 className="text-3xl font-semibold leading-none tracking-tight">
                {title}
            </h1>
            <br />
            <div className="w-full ">
                {videos && videos[videoIndex] && (
                    <video
                        src={videos[videoIndex].video}
                        controls
                        onEnded={() => setVideoIndex((prev) => prev + 1)}
                        className="w-full"
                    />
                )}

                {/* <ReactPlayer src={videos[videoIndex].video} /> */}
            </div>
            <div className="flex items-center mt-5 justify-between">
                {videos && videos[videoIndex] && (
                    <h1 className="text-lg font-bold">
                        {videos[videoIndex].title}
                    </h1>
                )}
                <Button>Mark as complete</Button>
            </div>
            {videos && videos[videoIndex] && (
                <p className="text-sm text-muted-foreground">
                    {videos[videoIndex].description}
                </p>
            )}
        </div>
    );
};

export default VideoPlayer;
