import React, { useEffect } from "react";
import { useState } from "react";

export const DBContext = React.createContext()

const DBProvider = ({children}) => {
    const [data, setData] = useState([])

    useEffect(() => getDBJsonData(), [])

    const getDBJsonData = () => {
        const dataJson = require("./../db/db.json")
        setData(dataJson)  
    }
    
    return(
        <DBContext.Provider value={{ data }}>
            {children} 
        </DBContext.Provider>
    )
}

export default DBProvider