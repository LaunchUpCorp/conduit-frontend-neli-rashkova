import React from "react";

function Button(props) {
    return (
        <div className="mx-auto w-full flex justify-end md:w-72 lg:w-96">
            <button type="submit" className="mt-1.5 text-white bg-green-500 w-full rounded px-2 py-1.5 text-xs lg:text-sm lg:w-1/5">{props.buttonText}</button>
        </div>
    );
}

export default Button;