import Header from "../components/Header.js";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront.js";

export default function BorderCard(props){

    const {questions, contadorCarta, borderColor} = props;

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
            <div className="flash-card" style={{'border': `5px solid ${borderColor}`}}>
            <div className="flashcard-back-title">
                {questions[contadorCarta].pergunta}
            </div>
                <div className="flashcard-counter">1/8</div>
                <span>{questions[contadorCarta].resposta}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={changeCounterAndPage} />
            </div>
        </div>
        </> : <FlashCardFront questions={props.questions}/>}
    </>
    )
}