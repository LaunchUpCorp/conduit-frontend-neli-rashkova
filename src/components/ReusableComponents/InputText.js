import React from "react";

function InputText(props) {
    return (
        <div className="w-full mt-1.5 mb-1.5 mx-auto md:w-72 lg:w-96">
            <input type={props.inputType} placeholder={props.placeholder} className="w-full border p-1.5 rounded text-xs md:w-72 lg:text-sm lg:w-96"></input>
        </div>
    );
}

export default InputText;