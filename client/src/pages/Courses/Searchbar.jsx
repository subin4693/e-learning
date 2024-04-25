import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
    return (
        <div className="flex justify-center items-center space-x-5">
            <Input type="text" placeholder="Search..." className="w-[40rem]" />
            <Search />
        </div>
    );
};

export default Searchbar;
