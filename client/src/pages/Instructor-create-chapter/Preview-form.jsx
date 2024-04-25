import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const PreviewForm = ({ freePreview, setFreePreview }) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };
    return (
        <div className="bg-secondary rounded-md p-3">
            <div className="font-medium flex justify-between items-center mb-2">
                Free Preview Chapter
                {/* <Button variant="ghost" onClick={toggleEdit}>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit title
                        </>
                    )}
                </Button> */}
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="terms"
                    onCheckedChange={(e) => setFreePreview(e)}
                    checked={freePreview}
                />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    );
};

export default PreviewForm;
