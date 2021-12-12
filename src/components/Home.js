import React from "react";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront.js";

export default function App(){

    const questions = 
    [
        {
            pergunta: "O que é JSX?", 
            resposta:"Uma extensão de linguagem do JavaScript"
        },
         
        {
            pergunta:"O React é __",
            resposta:"uma biblioteca JavaScript para construção de interfaces"
        },

        {
            pergunta:"Componentes devem iniciar com __", 
            resposta:"letra maiúscula"
        },
        
        {
            pergunta:"Podemos colocar __ dentro do JSX",
            resposta:"expressões"
        },
         
        {
            pergunta:"O ReactDOM nos ajuda __",
            resposta:"interagindo com a DOM para colocar componentes React na mesma"
        },
        
        {
            pergunta:"Usamos o npm para __",
            resposta:"gerenciar os pacotes necessários e suas dependências"
        },
       
        {
            pergunta:"Usamos props para __", 
            resposta:"passar diferentes informações para componentes"
        },
        
        {
            pergunta:"Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

const [paginaAtual, setPaginaAtual] = useState("Home");

    return (
        <>
        {paginaAtual === "Home" ?
        <div  className="container">
        
        <div>
        <img className="initial-main-img" src="../assets/logo.png" alt=""></img>
        </div>

        <button className="praticar-react" onClick={() => setPaginaAtual("FlashCardFront")}>
            <span>Praticar React  </span>
            <img src="../assets/next.png" alt=""/>
        </button> 
        
        </div> : <FlashCardFront  questions={questions}/>}
        
        </>
    )
}
