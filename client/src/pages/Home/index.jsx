import React, { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import FooterBanner from "./FooterBanner";
import { getAllCourses } from "@/api/api";

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await getAllCourses(3);

                setCourses(data.courses);
            } catch (error) {
                console.log(error);
            }
        };
        getCourses();
    }, []);

    return (
        <div>
            <HeroBanner />

            <Features />
            <PopularCourses courses={courses} />
            <FooterBanner />
        </div>
    );
};

export default Home;
