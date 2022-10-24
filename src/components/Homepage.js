import React from "react";
import Header from "./Header";
import Body from "./Body";

function Homepage() {
    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <Header />
            <Body />
        </div>
    );
}

export default Homepage;