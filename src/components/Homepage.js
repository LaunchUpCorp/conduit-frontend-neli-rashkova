import React from "react";
import Banner from "./Banner";
import Feed from "./Feed";

function Homepage() {
    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <Banner />
            <Feed />
        </div>
    );
}

export default Homepage;