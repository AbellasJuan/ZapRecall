import { useState } from "react"
import Home from "../components/Home.js"
import Header from "./Header.js";

export default function Failure(){

    const [tentarNovamente, setTentarNovamente] = useState('parabens');

    return(
    <>
        <Header/>
        {tentarNovamente === 'parabens' ? 
        <>
        <div className="result-screen">
            <span>Putz..
                <img src="../assets/sad.png" alt=""/>    
            </span> 
            <p>Você esqueceu alguns flashcards..<br/>Não desanime! Na próxima você consegue!</p>
        </div>
            <button className="praticar-react button-result" onClick={() => setTentarNovamente('home')}>
            <span>Tentar novamente</span><img src="../assets/next.png" alt=""/>
            </button> 
        </> : 
        <Home/>} 
    </>
    )
}