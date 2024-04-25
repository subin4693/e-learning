import React from "react";
import quiz from "@/assets/quiz.png";
import instructor from "@/assets/instructor.png";
import lifetimeaccess from "@/assets/lifetimeaccess.png";
import videos from "@/assets/recorded-videos.png";
import { Button } from "@/components/ui/button";

const Features = () => {
    return (
        <div className=" grid grid-cols-3  gap-5  rounded-md  ">
            <div className=" text-6xl font-bold bg-primary text-primary-foreground rounded-md col-span-2 p-5">
                Our features <br />
                Special For you
                <br />
                <Button variant="secondary">See courses</Button>
            </div>
            <div className=" bg-secondary rounded-md p-5">
                <img src={quiz} className="w-[150px]" />
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Quiz
                </h1>
                <p className="text-muted-foreground mt-2">
                    Add Value To Your Certificates And Increase Your Chances Of
                    Getting hired In Your Dream Job.
                </p>
            </div>

            <div className=" bg-secondary rounded-md p-5">
                <img src={instructor} className="w-[150px]" />
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Amazing Instructor
                </h1>
                <p className="text-muted-foreground mt-2">
                    Our Amazing instructor Bring Experience, Knowledge And Fun
                    On The Table
                </p>
            </div>
            <div className="bg-secondary rounded-md p-5">
                <img src={lifetimeaccess} className="w-[105px]" />
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Life time support
                </h1>
                <p className="text-muted-foreground mt-2">
                    You Will Have Life Times Access Of The Courses & Resources.
                    Also Contacting instructors Any Time!.
                </p>
            </div>
            <div className=" bg-secondary p-5 rounded-md">
                <img src={videos} className="w-[150px]" />
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Video lession
                </h1>
                <p className="text-muted-foreground mt-2">
                    Recorded Version Of Lectures Form Professional instructors
                    To Boost Your Growth.
                </p>
            </div>
        </div>
    );
};

export default Features;
