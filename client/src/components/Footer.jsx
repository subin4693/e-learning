import React from "react";

const Footer = () => {
    return (
        <div className="bg-secondary px-10 pt-10 pb-5 rounded-tr-3xl rounded-tl-3xl ">
            <div className="flex justify-between">
                <div>
                    <span className="flex items-center  font-bold text-2xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                        &nbsp; E-Lrn
                    </span>

                    <p className="text-muted-foreground mt-2 ">
                        Speed up the skill acquisition process by <br /> finding
                        unlimited courses that matches you <br />
                        niche.
                    </p>
                </div>
                <div className="flex space-x-20">
                    <div>
                        <h2>Company</h2>
                        <ul>
                            <li className="text-muted-foreground mt-2 ">
                                About Us
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                Careers
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                Press kit
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <ul>
                            <li className="text-muted-foreground mt-2 ">
                                Blog
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                Help Center
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                UX Researche Guide
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <ul>
                            <li className="text-muted-foreground mt-2 ">
                                Pricing
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                Enterprise
                            </li>
                            <li className="text-muted-foreground mt-2 ">
                                Integrate
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between  text-muted-foreground mt-10 text-sm ">
                <p>@Subin 2024 || All rights reserved</p>
                <p>Terms & Privarcy Policy</p>
            </div>
        </div>
    );
};

export default Footer;
