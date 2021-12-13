import { useState } from "react";

import Header from "../components/Header.js";
import FlashCardBack from "./FlashCardBack.js";
import Success from "../components/Success.js";
import Failure from "../components/Failure.js";

export default function FlashCardFront(props){
    const { acertouMaisUm, acertou ,questions, contadorCarta} = props;
    
    const [pagina, setPagina] = useState("FlashCardFront");

    if (contadorCarta === 8 && acertou === 8) {
        return (<Success/>)
    } else if(contadorCarta === 8 && acertou !== 8){
        return (<Failure/>)
    };
    
    return(
    <>
    {pagina === "FlashCardFront" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card" data-identifier="flashcard">
                <div className="flashcard-counter" data-identifier="counter">
                    {contadorCarta+1}/{questions.length}
                </div>
                <span>{questions[contadorCarta].pergunta}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={() => (setPagina("FlashCardBack"))} data-identifier="arrow"/>
            </div>
        </div>
        </> : <FlashCardBack acertouMaisUm={acertouMaisUm} acertou={acertou} questions={questions} contadorCarta={contadorCarta} />}
    </>
    )
};

