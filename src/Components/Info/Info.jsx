import React, {useState} from "react";
import Pregunta from "../Pregunta/Pregunta";
import "./Info.css"

const Info = ({info}) => {
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(0)
    const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false)
    const [isNextButtonVisible, setIsNextButtonVisible] = useState(true)

    const goPrev = () => {
        const newIndex = preguntaSeleccionada - 1

        if (newIndex >= 0) {
            setPreguntaSeleccionada(newIndex)
        }
        updateButtons(newIndex)
    }

    const goNext = () => {
        const newIndex = preguntaSeleccionada + 1

        if (newIndex < info.preguntas.length) {
            setPreguntaSeleccionada(newIndex)
        }
        updateButtons(newIndex)
    }

    const updateButtons = (index) => {
        setIsPrevButtonVisible(index > 0)
        setIsNextButtonVisible(index < info.preguntas.length - 1)
    }

    const onSuccessPregunta = () => {
        goNext() 
    }

    return (
        <section className="Info">
            <h1>Nombre del cliente: <p className="InfoCliente">{info.cliente || ''}</p></h1>
            <h1>Cómo utilizar el sitio web?</h1>

            <div className="InfoVideo">
                <video className="widthVideo" src={info.linkVideo || ''} controls={true}></video>
            </div>

            <div className="InfoEscenario">
                <h2>Escenario: {info.escenario || ''}</h2>
            </div>

            <section className="InfoPreguntasSection">
                <button className="InfoButton" onClick={goPrev} style={{visibility: isPrevButtonVisible ? 'visible' : 'hidden'}}>
                    Anterior
                </button>
                
                <Pregunta {...info.preguntas[preguntaSeleccionada]} index={preguntaSeleccionada} onSuccess={onSuccessPregunta} />
                
                <button className="InfoButton" onClick={goNext} style={{visibility: isNextButtonVisible ? 'visible' : 'hidden'}}>
                    Siguiente
                </button>
            </section>

            <div className="InfoTranscription">
                <h1>Transcripción</h1>
                <p className="transcripcion" dangerouslySetInnerHTML={{__html: info.transcripcion}} />
            </div>
        </section>
    )
}

export default Info