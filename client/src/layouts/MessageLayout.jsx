import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MessageLayout = () => {
    return (
        <div className="px-[10%] min-h-screen ">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MessageLayout;
