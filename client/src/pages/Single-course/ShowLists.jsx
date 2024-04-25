import { Check } from "lucide-react";
import React from "react";

const ShowLists = ({ title, details }) => {
    return (
        <div className="my-7">
            <h1 className="text-xl font-semibold leading-none tracking-tight mb-5">
                {title}
            </h1>
            <ul className="space-y-3">
                {details?.map((detail, index) => (
                    <li key={index} className="flex gap-2">
                        <Check />
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowLists;
