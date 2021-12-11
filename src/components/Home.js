import React from "react";
import { useState } from "react";
import FlashCardFront from "./FlashCardFront.js";

export default function App(){

    const questions = 
    [
        {
            pergunta1: "O que é JSX?", 
            resposta1:"Uma extensão de linguagem do JavaScript"
        },
         
        {
            pergunta2:"O React é __",
            resposta2:"uma biblioteca JavaScript para construção de interfaces"
        },

        {
            pergunta3:"Componentes devem iniciar com __", 
            resposta3:"letra maiúscula"
        },
        
        {
            pergunta4:"Podemos colocar __ dentro do JSX",
            resposta4:"expressões"
        },
         
        {
            pergunta5:"O ReactDOM nos ajuda __",
            resposta5:"interagindo com a DOM para colocar componentes React na mesma"
        },
        
        {
            pergunta6:"Usamos o npm para __",
            resposta6:"gerenciar os pacotes necessários e suas dependências"
        },
       
        {
            pergunta7:"Usamos props para __", 
            resposta7:"passar diferentes informações para componentes"
        },
        
        {
            pergunta8:"Usamos estado (state) para __",
            resposta8: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

console.log(questions)
console.log(questions.length)

console.log(questions[0])
console.log(questions[0].pergunta1)
console.log(questions[0].resposta1)


const [paginaAtual, setPaginaAtual] = useState("Home");

    return (
        <>
        {paginaAtual === "Home" ?
        <container>
        
        <div>
        <img className="initial-main-img" src="../assets/logo.png" alt=""></img>
        </div>

        <button className="praticar-react" onClick={() => setPaginaAtual("FlashCardFront")}>
            <span>Praticar React  </span>
            <img src="../assets/next.png" alt=""/>
        </button> 
        
        </container> : <FlashCardFront  questions={questions}/>}
        
        </>
    )
}
