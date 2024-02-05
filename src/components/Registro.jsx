import React, { useState } from "react";
import Formulario from "./Formulario";
import Alert from "./Alert";
import SocialButton from "./SocialButton";
const Registro = () => {
    return (
        <>
            <h1>Crear una cuenta</h1>
            <SocialButton facebook={"facebook"} />
            <SocialButton github={"github"} />
            <SocialButton linkedin={"linkedin"} />
            <h4>Crea tu cuenta ingresando tu mail.</h4>
            <Formulario 
            error= {error}
            set= {setError} 
            />
            <Alert />
        </>
    );
};
export default Registro;