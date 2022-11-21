import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { DBContext } from "../../Context/DBContext";
import Info from "../Info/Info";
import "./Body.css"
import Error from "../Error/Error";

const Body = () => {
    const { cliente } = useParams();

    const dbContext = useContext(DBContext)
    
    const [data, setData] = useState()
    
    useEffect(() => {
        if (cliente && dbContext) {
            const clientFound = dbContext.data.find((item) => item.cliente === cliente)

            if(clientFound){
                setData(clientFound) //encontramos los 2 clientes por separado
            }
        }
    }, [cliente, dbContext])

    return (

        <div className="BodyDiv">
            {!data ?
                <Error cliente={cliente} /> 
             : 
            <div className="BodyData">
                <Info info={data} />
            </div>
            }
        </div>
    )
}

export default Body