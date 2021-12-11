import Header from "./Header.js";
import BorderCard from "./BorderCard.js";
import { useState } from "react";

export default function FlashCardBack(props){

    const [paginaDaResposta, setPaginaDaResposta] = useState("paginaResposta")
    const [borderColor, setBorderColor] = useState("")

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
            <div className="flash-card">
                <div className="flashcard-back-title">{props.questions[0].pergunta1}</div>
                <div className="flashcard-counter">1/8</div>
                <span style={{
                        'fontWeight': '400',
                        'fontSize': '16px',
                }}>
                    {props.questions[0].resposta1}</span>
                
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
                    
                    <div className="option" style={{'borderColor': '#FFEF61'}} onClick={() => borderAndSet('#FFEF61')}>
                        <span style={{'fontWeight': '700'}}>Zap!</span>
                    </div>
                
                </div>
            </div>
        </div></> : <BorderCard borderColor={borderColor} questions={props.questions}/>}
        </>
    )
}