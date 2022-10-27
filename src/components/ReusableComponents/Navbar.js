import React from "react";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="mx-auto mt-1 gap-3 bg-white flex flex-wrap items-center justify-between w-3/4 md:flex-none md:pl-2 md:pr-2">
            <a href="#" className="font-anton text-green-500 tracking-wider text-lg mt-2 mb-2">conduit</a>
            <div className="p-3 space-y-2 bg-green-500 active:bg-green-300 md:hidden" onClick={() => setOpen(!open)}>
                <span className="block w-6 h-0.5 bg-gray-100"></span>
                <span className="block w-6 h-0.5 bg-gray-100"></span>
                <span className="block w-6 h-0.5 bg-gray-100"></span>
            </div>
            <ul className={`${open ? "block" : "hidden"} w-full md:w-fit md:flex md:gap-1"`}>
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-0.5 active:bg-green-300 duration-150 md:p-1">Home</a>
                </li>
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-0.5 active:bg-green-300 duration-150 md:p-1">Sign in</a>
                </li>
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-0.5 active:bg-green-300 duration-150 md:p-1">Sign up</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;