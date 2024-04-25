import React from "react";

import { Outlet } from "react-router-dom";
import { Card } from "@/components/ui/card";

const RootLayout = () => {
    return (
        <div className="min-h-[65vh] py-10">
            <Card className="flex p-20 mt-10">
                <div className="w-1/2">
                    <img
                        src="https://www.themeqx.com/wp-content/uploads/2020/05/elearning@3x.png"
                        className="w-full object-cover"
                    />
                </div>
                <div className="w-1/2">
                    <Outlet />
                </div>
            </Card>
        </div>
    );
};

export default RootLayout;
