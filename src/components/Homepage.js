import React from "react";
import Header from "./Header";

function Homepage() {
    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <div className="block">
                <Header />
            </div>
        </div>
    );
}

export default Homepage;