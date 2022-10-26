import React from "react";

function Navbar() {
    return (
        <nav className="mx-auto gap-3 bg-white flex justify-between items-center w-3/4 pl-2 pr-2">
            <a href="#" className="font-anton text-green-500 tracking-wider text-lg mt-2 mb-2">conduit</a>
            <ul className="flex gap-1">
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-1">Home</a>
                </li>
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-1">Sign in</a>
                </li>
                <li className="p-0.5">
                    <a href="#" className="font-sans text-gray-400 text-xs no-underline flex items-center p-1">Sign up</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;