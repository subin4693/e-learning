import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const ConvertInstructor = () => {
    return (
        <div className="h-svh items-center justify-center flex flex-col">
            <div className="w-2/3">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Beome an Instructor
                </h1>
                <br />
                <p>
                    "Attention Students! Exciting news! You now have the
                    opportunity to become an instructor on our eLearning
                    platform. Create and publish your own courses to share your
                    expertise with the world. Simply navigate to your profile
                    settings to upgrade to an instructor account. Please note
                    that a small fee is required to unlock instructor
                    privileges. Once upgraded, you can start crafting your
                    course content, including titles, descriptions, and pricing.
                    Additionally, instructors can engage with students and
                    address their questions through our community messaging
                    feature. Don't miss out on this chance to empower others
                    with your knowledge!"
                </p>
                <br />
                <Button asChild>
                    <Link to="/instructor/payment">
                        Convert to instructor Pay 2500
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ConvertInstructor;
