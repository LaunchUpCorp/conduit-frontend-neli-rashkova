import React from "react";

function SignUpForm() {
    return (
        <div className="mx-auto flex flex-col mt-2.5 pt-[15%] md:pt-[10%] lg:pt-[5%]">
            <div className="mx-auto mt-3 mb-2 w-2/5">
                <h2 className="text-center text-3xl tracking-wide mb-1.5">Sign Up</h2>
                <a href="#" className="block text-center text-xs text-green-500">Have an account?</a>
            </div>
            <form className="mx-auto w-1/2 md:w-2/5 lg:w-3/5">
                <div className="w-full mt-1.5 mb-1.5 mx-auto md:w-72 lg:w-96">
                    <input type="text" placeholder="Username" className="w-full border p-1.5 rounded text-xs md:w-72 lg:text-sm lg:w-96"></input>
                </div>
                <div className="w-full mt-2.5 mb-1.5 mx-auto md:w-72 lg:w-96">
                    <input type="email" placeholder="Email" className="w-full border p-1.5 rounded text-xs md:w-72 lg:text-sm lg:w-96"></input>
                </div>
                <div className="w-full mt-2.5 mb-1.5 mx-auto md:w-72 lg:w-96">
                    <input type="password" placeholder="Password" className="w-full border p-1.5 rounded text-xs md:w-72 lg:text-sm lg:w-96"></input>
                </div>
                <div className="mx-auto w-full flex justify-end md:w-72 lg:w-96">
                    <button type="submit" className="mt-1.5 text-white bg-green-500 w-full rounded px-2 py-1.5 text-xs lg:text-sm lg:w-1/5">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;