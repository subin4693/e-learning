import { sendMessage } from "@/api/api";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Messages = ({ search, messages, user, handleSend }) => {
    const [selectedTab, setSelectedTab] = useState("instructor");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    return (
        <div className="pl-3 h-full  ">
            <div className="flex justify-between text-center bg-secondary rounded-md p-1 sticky top-0 z-10">
                <div
                    className={cn(
                        "flex-1 rounded-md p-2 duration-100 cursor-pointer",
                        selectedTab === "instructor"
                            ? "bg-background"
                            : "text-muted-foreground"
                    )}
                    onClick={() => {
                        navigate(`?search=${search}&&type=private`);
                        setSelectedTab("instructor");
                    }}
                >
                    Instructor
                </div>
                <div
                    className={cn(
                        "flex-1 rounded-md p-2 duration-100 cursor-pointer",
                        selectedTab === "community"
                            ? "bg-background"
                            : "text-muted-foreground"
                    )}
                    onClick={() => {
                        navigate(`?search=${search}&&type=group`);
                        setSelectedTab("community");
                    }}
                >
                    Community
                </div>
            </div>
            <div className="flex flex-col gap-14 mt-3 py-2 pb-16    h-full overflow-scroll ">
                {messages.map((message) => (
                    <div className=" relative w-full">
                        <span
                            className={cn(
                                "rounded-md bg-secondary w-fit p-3 absolute",
                                message.from == user?._id
                                    ? "right-0 bg-primary text-primary-foreground"
                                    : ""
                            )}
                        >
                            {message.message}
                        </span>
                    </div>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(message);
                    setMessage("");
                }}
            >
                <Input
                    type="text"
                    placeholder="Type here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="    border-primary "
                />
            </form>
        </div>
    );
};

export default Messages;
