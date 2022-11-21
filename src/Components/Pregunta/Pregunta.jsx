import React from "react";
import "./Pregunta.css"

const Pregunta = ({texto, tiempo, tipoTarea, respuesta, index, onSuccess}) => {

    const onClickButton = (value) => {
        if (parseInt(respuesta) === value) {
            onSuccess()
        }
    }

    const textReplaced = () => {
        return texto.replace(/\\n/g,'\n');
    }


    return (
        <section>
            <h2>Tarea numero {index + 1}</h2>
            <p className="PreguntaTexto">{textReplaced()}</p>

            Tiempo de tarea: 
            <span className="PreguntaTiempo">
                {tiempo}
            </span>

            {tipoTarea === 'opinionScale5' && 
            <section className="PreguntaBotones">
                <button className="PreguntaBotton" onClick={() => onClickButton(1)}>1</button>
                <button className="PreguntaBotton" onClick={() => onClickButton(2)}>2</button>
                <button className="PreguntaBotton" onClick={() => onClickButton(3)}>3</button>
                <button className="PreguntaBotton" onClick={() => onClickButton(4)}>4</button>
                <button className="PreguntaBotton" onClick={() => onClickButton(5)}>5</button>
            </section>
            }
        </section>
    )
}

export default Pregunta