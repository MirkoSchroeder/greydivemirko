import React, { useEffect, useState } from "react";
import "./Body.css"

const jsonData = () => {
    const data = require("../../db/db.json")
    console.log(data);
}

const Body = () => {

    // const [data, setData] = useState([])

    useEffect(() => {
        jsonData()
    }, [])
    
    return (
        <div className="Body">
            
        </div>
    )
}

export default Body