import React from "react";
import InputText from "./InputText";
import Button from "./Button";

function Form(props) {

    let inputFields = props.inputs;

    return (
        <form className="mx-auto w-1/2 md:w-2/5 lg:w-3/5">
            {inputFields.map((element) => {
                {if (element === "Username"){
                    return <InputText type="text" placeholder="Username" />}
                }
                {if (element === "Email"){
                    return <InputText type="email" placeholder="Email" />}
                }
                {if (element === "Password"){
                    return <InputText inputType="password" placeholder="Password" />}
                }

            })}
            <Button buttonText={props.buttonText} />
        </form>
    );
}

export default Form;