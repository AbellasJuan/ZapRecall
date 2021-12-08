export default function FlashCardBack(){
    return(
        <div className="container-flashcard">
            <div className="flash-card">
                <div className="flashcard-back-title">Mesma pergunta dinamica do front</div>
                <div className="flashcard-counter">1/8</div>
                <span style={{
                        'font-weight': '400',
                        'font-size': '16px',
                }}>
                    Aqui tem uma frase dinamica e isso vai ser uma variavel</span>
                
                <div className="response-options">
                
                    <div className="option" style={{'border-color': 'black'}}>
                        <span>Aprendi agora</span>
                    </div>
                    
                    <div className="option" style={{'border-color': '#F64848'}}>
                        <span>Não lembrei</span>
                    </div>

                    <div className="option" style={{'border-color': '#62DB38'}}>
                        <span>Lembrei com esforço</span>
                    </div>
                    
                    <div className="option" style={{'border-color': '#FFEF61'}}>
                        <span style={{'font-weight': '700'}}>Zap!</span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}