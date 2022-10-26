import React from "react";
import Navbar from "../ReusableComponents/Navbar";
import Banner from "./Banner";
import Feed from "./Feed";

function Homepage() {
    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <Navbar />
            <Banner />
            <Feed />
        </div>
    );
}

export default Homepage;