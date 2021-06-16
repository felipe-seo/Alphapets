import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function PassReset(props) {
    const [user, setUser]=useState("")
    const [password, setPassword]=useState("")
    
    const registerFunction = () => {        
        useHistory.push(`/register`);
    }
    return (
        <div className="loginPanel">
            <input type="text" placeholder="E-mail"/>

            <button className="authenticate">
                ENVIAR
            </button>



        </div>
    )
}

export default PassReset;