import React from "react";

const HeroBanner = () => {
    return (
        <div className="flex   h-[90vh]  ">
            <img
                src="https://mantrabrain.com/wp-content/uploads/edd/2020/07/Sikshya-LMS.png"
                alt="banner img"
                className="object-contain w-1/2 "
            />
            <div className="  w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-6xl font-black leading-normal">
                    Improve your <br />
                    <span className=" bg-primary text-primary-foreground rounded-md p-1">
                        Skills
                    </span>{" "}
                    Faster
                </h1>
                <p className="text-muted-foreground mt-2">
                    Speed Up The Skills Acquisition Process By Finding Unlimited
                    Courses That Matches Your Niche.
                </p>
            </div>
        </div>
    );
};

export default HeroBanner;
