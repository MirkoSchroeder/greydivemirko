import React from "react";
import "./Error.css"
import image404 from "./../../assets/404error.jpg"


const Error = ({cliente}) => {

    return (
        <div className="Error404">
            <h2 className="ErrorText">No se encontro el cliente /{cliente}</h2>
            <img className="Error404Img" src={image404} alt="error 404" />
        </div>
    )
}

export default Error