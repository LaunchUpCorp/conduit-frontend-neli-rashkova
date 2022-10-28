import React from "react";
import Navbar from "../ReusableComponents/Navbar";
import Form from "../ReusableComponents/Form";

function SignUpPage() {

    return (
        <div className="border-box mx-auto w-full h-full md:max-h-screen max-w-screen-3xl">
            <Navbar />
            <div className="mx-auto flex flex-col mt-2.5 pt-[15%] md:pt-[10%] lg:pt-[5%]">
                <div className="mx-auto mt-3 mb-2 w-2/5 flex flex-col justify-center items-center">
                    <h2 className="text-center text-3xl tracking-wide mb-1.5">Sign Up</h2>
                    <a href="#" className="block w-fit text-center text-xs text-green-500">Have an account?</a>
                </div>
                <Form inputs={["Username", "Email", "Password"]} buttonText="Sign up" />
            </div>
        </div>
    );
}

export default SignUpPage;