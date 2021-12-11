import Header from "../components/Header.js";
import FlashCardBack from "./FlashCardBack.js";
import { useState } from "react";

export default function FlashCardFront(props){

    const [pagina, setPagina] = useState("FlashCardFront");

    return(
    <>
    {pagina === "FlashCardFront" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card">
                <div className="flashcard-counter">1/8</div>
                <span>{props.questions[0].pergunta1}</span>
                <img className="logo-turn" src="assets/turn.png" alt="" onClick={() => (setPagina("FlashCardBack"))} />
            </div>
        </div>
        </> : <FlashCardBack questions={props.questions}/>}
    </>
    )
}

