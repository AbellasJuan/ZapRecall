import Header from "../components/Header.js";
import FlashCardBack from "./FlashCardBack.js";
import { useState } from "react";
import Success from "../components/Success.js";
import Failure from "../components/Failure";

export default function FlashCardFront(props){
    const { acertouMaisUm, acertou ,questions, contadorCarta} = props;
    
    const [pagina, setPagina] = useState("FlashCardFront");
    
    console.log(contadorCarta);
    console.log(acertou);
    
    if (contadorCarta === 8 && acertou === 8) {
        console.log("deu certo esse kao")
        return (<Success/>)
    } else if(contadorCarta === 8 && acertou !== 8){
        return (<Failure/>)
    }
    
    return(
    <>
    {pagina === "FlashCardFront" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card">
                <div className="flashcard-counter">{contadorCarta+1}/{questions.length}</div>
                <span>{questions[contadorCarta].pergunta}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={() => (setPagina("FlashCardBack"))} />
            </div>
        </div>
        </> : <FlashCardBack acertouMaisUm={acertouMaisUm} acertou={acertou} questions={questions} contadorCarta={contadorCarta} />}
    </>
    )
}

