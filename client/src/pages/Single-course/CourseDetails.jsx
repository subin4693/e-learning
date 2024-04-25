import React from "react";
import ShowLists from "./ShowLists";

const CourseDetails = ({ course }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
                {course.title}
            </h2>
            <div>
                <h2 className="text-xl font-semibold leading-none tracking-tight mt-7 mb-5">
                    Description
                </h2>
                <p>{course.description}</p>
            </div>

            <ShowLists
                title={"What you will learn from this course ? "}
                details={course?.learnings}
            />
            <ShowLists
                title={"What are the prerequisties for starting this course"}
                details={course?.prerequisties}
            />
        </div>
    );
};

export default CourseDetails;
