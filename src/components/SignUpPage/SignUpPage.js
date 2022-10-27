import React from "react";
import Navbar from "../ReusableComponents/Navbar";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <Navbar />
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;