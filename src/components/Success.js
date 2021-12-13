import { useState } from "react"
import Home from "../components/Home.js"

export default function Success(){

    const [tentarNovamente, setTentarNovamente] = useState('parabens');

    return(
        <>
    {tentarNovamente === 'parabens' ? 
    <>
        <div className="result-screen">
            <span>PARABÉNS!
                <img src="assets/party.png" alt=""/>    
            </span> 
            
        
        <p>Você não esqueceu de nenhum flashcard!</p>
        </div>
        <button className="praticar-react exemplo" onClick={() => setTentarNovamente('home')}>
        <span>Tentar novamente</span><img src="../assets/next.png" alt=""/>
        </button> 
    </> : <Home/> } 
    </>
    )
}