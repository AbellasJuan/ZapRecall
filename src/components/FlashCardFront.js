import Header from "../components/Header.js";
import FlashCardBack from "./FlashCardBack.js";
import { useState } from "react";

export default function FlashCardFront(props){
    
    const {questions} = props;
    
    const [pagina, setPagina] = useState("FlashCardFront");
    const [contadorCarta, setContadorCarta] = useState(0);
    
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
        </> : <FlashCardBack questions={props.questions} contadorCarta={contadorCarta} setContadorCarta={setContadorCarta}/>}
    </>
    )
}

