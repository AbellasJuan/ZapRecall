import Header from "./Header.js";
import BorderCard from "./BorderCard.js";
import { useState } from "react";

export default function FlashCardBack(props){
    const {acertouMaisUm, acertou, questions, contadorCarta} = props;

    const [paginaDaResposta, setPaginaDaResposta] = useState("paginaResposta");
    const [borderColor, setBorderColor] = useState("");
    
    function borderAndSet(color){
        setBorderColor(color);
        setPaginaDaResposta("BorderCard");
    };

    return(
    <>
        {paginaDaResposta === "paginaResposta" ?
        <>
        <Header/>
        <div className="container-flashcard">
            <div className="flash-card" data-identifier="flashcard">
                <div className="flashcard-back-title">{questions[contadorCarta].pergunta}</div>
                <div className="flashcard-counter" data-identifier="counter">{contadorCarta+1}/{questions.length}</div>
                <span style={{
                        'fontWeight': '400',
                        'fontSize': '16px',
                }}>
                    {questions[contadorCarta].resposta}</span>
                
                <div className="response-options">
                
                    <div className="option" style={{'borderColor': 'black'}} onClick={() => borderAndSet('black')}>
                        <span>Aprendi agora</span>
                    </div>
                    
                    <div className="option" style={{'borderColor': '#F64848'}} onClick={() => borderAndSet('#F64848')}>
                        <span>Não lembrei</span>
                    </div>

                    <div className="option" style={{'borderColor': '#62DB38'}} onClick={() => borderAndSet('#62DB38')}>
                        <span>Lembrei com esforço</span>
                    </div>
                    
                    <div className="option" style={{'borderColor': '#FFEF61'}} onClick={() => {borderAndSet('#FFEF61') ; acertouMaisUm()}}>
                        <span style={{'fontWeight': '700'}}>Zap!</span>
                    </div>
                
                </div>
            </div>
        </div></> : 
        <BorderCard acertouMaisUm={acertouMaisUm} acertou={acertou} contadorCarta={contadorCarta} borderColor={borderColor} questions={questions} />}
    </>
    )
};