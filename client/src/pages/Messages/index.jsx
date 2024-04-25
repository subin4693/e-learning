import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";

import io from "socket.io-client";
import { useUserContext } from "@/context/userContext";
import { useSearchParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { getAllMessages, getChats, sendMessage } from "@/api/api";

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;
const Message = () => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [socketConnected, setSocketConnected] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const type = searchParams.get("type");

    const { user } = useUserContext();

    const handleSend = async (message) => {
        try {
            const res = await sendMessage(search, { message, type });
            socket.emit("new message", {
                message: res,
                users,
            });

            setMessages((prev) => [...prev, res]);
        } catch (error) {
            console.log(error);
        }
    };

    const connectSocket = () => {
        socket = io(ENDPOINT);
        socket.emit("setup", user._id);
        socket.on("connected", () => {
            console.log("connected successfully");
            setSocketConnected(true);
        });
    };
    const getAllChats = async () => {
        try {
            const data = await getChats();

            setChats(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getMessages = async () => {
            try {
                const data = await getAllMessages(search, type);

                setUsers(data.users);
                setMessages(data.messages);
            } catch (error) {
                console.log(error);
            }

            socket.emit("join chat", { roomId: search + type });
        };
        if (search && type) getMessages();
    }, [search, type]);

    useEffect(() => {
        if (user && user?._id) connectSocket();
        getAllChats();
    }, []);

    // const setMsg = (msg) => {
    //     console.log("**************");
    // if (msg._id !== messages[messages.length - 1]._id) {
    //         console.log(msg);
    //         console.log(messages);

    //         console.log("**************");
    //     }
    // };
    useEffect(() => {
        if (socket)
            socket.on("message recieved", (message) => {
                if (message.type == type) {
                    console.log(message);
                    if (message._id !== messages[messages.length - 1]._id)
                        setMessages((prev) => [...prev, message]);
                    console.log(messages);
                }
            });
    }, [socket]);

    return (
        <div className="flex h-[80vh] mb-5  ">
            <div className="w-1/3">
                <Sidebar chats={chats} />
            </div>
            <div className="w-2/3">
                {search == null ? (
                    <div className="h-full flex justify-center flex-col items-center gap-5">
                        <MessageCircle className="w-[10rem] h-[10rem]" />
                        Select a chat
                    </div>
                ) : (
                    <Messages
                        search={search}
                        type={type}
                        messages={messages}
                        setMessages={setMessages}
                        user={user}
                        handleSend={handleSend}
                    />
                )}
            </div>
        </div>
    );
};

export default Message;
