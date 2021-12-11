import Header from "../components/Header.js";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront.js";

export default function BorderCard(props){

    const [paginaNova, setPaginaNova] = useState("CardBorder");

    console.log(props)
    console.log('borderrrr')
//borderColor e questions

    return(
    <>
    {paginaNova === "CardBorder" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card" style={{'border': `5px solid ${props.borderColor}`}}>
            <div className="flashcard-back-title">
                {props.questions[0].pergunta1}
            </div>
                <div className="flashcard-counter">1/8</div>
                <span>{props.questions[0].resposta1}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={() => (setPaginaNova("FlashCardFront"))} />
            </div>
        </div>
        </> : <FlashCardFront questions={props.questions}/>}
    </>
    )
}