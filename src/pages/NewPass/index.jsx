import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function NewPass(props) {    
    const [password, setPassword]=useState("")
    
    const registerFunction = () => {        
        useHistory.push(`/register`);
    }
    return (
        <div className="loginPanel">
            <input type="text" placeholder="Senha"/>
            <input type="text" placeholder="Confirmar a senha"/>
            <button className="authenticate">
                ENVIAR
            </button>



        </div>
    )
}

export default NewPass;