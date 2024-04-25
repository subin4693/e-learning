import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = ({ chats }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="border-r h-full overflow-scroll pr-3 h-[89vh]">
            <ul>
                {chats.map((chat) => (
                    <Link to={"?search=" + chat._id + "&&type=private"}>
                        <li
                            className={cn(
                                "flex items-center gap-3 my-1 p-1 rounded-md hover:bg-secondary  ",
                                searchParams.get("search") === chat._id
                                    ? "bg-secondary border border-primary dark:border-none"
                                    : "text-muted-foreground",
                            )}
                            key={chat._id}
                        >
                            <Avatar>
                                <AvatarImage src={chat?.courseId?.image} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="line-clamp-1">
                                    {chat?.courseId?.title}
                                </p>
                                <p className="text-sm">
                                    {chat?.lastMessage?.message}
                                </p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
