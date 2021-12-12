import Header from "../components/Header.js";
import FlashCardBack from "./FlashCardBack.js";
import { useState } from "react";
import Success from "../components/Success.js";

export default function FlashCardFront(props){
    
    const {questions, contadorCarta} = props;
    
    const [pagina, setPagina] = useState("FlashCardFront");
    
    console.log(contadorCarta)
    
    if (contadorCarta === 7) {
        console.log("deu certo esse kao")
        return (<Success/>)
    }
    
    return(
    <>
    {pagina === "FlashCardFront" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card">
                <div className="flashcard-counter">1/8</div>
                <span>{questions[contadorCarta].pergunta}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={() => (setPagina("FlashCardBack"))} />
            </div>
        </div>
        </> : <FlashCardBack questions={questions} contadorCarta={contadorCarta} />}
    </>
    )
}

