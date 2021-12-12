import Header from "../components/Header.js";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront.js";

export default function BorderCard(props){

    const { acertouMaisUm, acertou, questions, contadorCarta, borderColor } = props;

    const [paginaNova, setPaginaNova] = useState("CardBorder");

    function changeCounterAndPage(){
        setPaginaNova("FlashCardFont");
    }

    return(
    <>
    {paginaNova === "CardBorder" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card" style={{'border': `5px solid ${borderColor}`}} data-identifier="flashcard">
            <div className="flashcard-back-title">
                {questions[contadorCarta].pergunta}
            </div>
                <div className="flashcard-counter" data-identifier="counter">{contadorCarta+1}/{questions.length}</div>
                <span>{questions[contadorCarta].resposta}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={changeCounterAndPage} data-identifier="arrow"/>
            </div>
        </div>
        </> : <FlashCardFront acertouMaisUm={acertouMaisUm} acertou={acertou} questions={questions} contadorCarta={contadorCarta+1}/>}
    </>
    )
}