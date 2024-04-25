import React from "react";
import banner from "@/assets/footer-banner.png";
import { Button } from "@/components/ui/button";
const FooterBanner = () => {
    return (
        <div className="  bg-secondary rounded-md my-10   flex ">
            <div className="w-1/2">
                <img src={banner} className="object-cover h-full  w-full " />
            </div>
            <div className="flex  justify-center flex-col text-left ">
                <h2 className="text-2xl font-semibold leading-none tracking-tight">
                    Get Ready to Started
                </h2>

                <p className="my-4">
                    After A Good Dinner One Can Forgive Anybody Even One's Own
                    Relations
                </p>
                <Button className="w-fit ">Buy Now</Button>
            </div>
        </div>
    );
};

export default FooterBanner;
