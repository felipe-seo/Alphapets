import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import {UserContext} from "../../providers/UserProvider"

function Login(props) {
    const {userLogin} = useContext(UserContext)
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const move = useHistory()
    const gotoRegisterFunction = () => {        
        move.push(`/register`);
    }

    const gotoHomeFunction = (event) => {
        //move.push(`/home`);
        event.preventDefault()
        const past = userLogin(  {          
                "name":name,                
                "password":password   }         
        )
        if (past == "success") {
            move.push(`/home`);
        }
    }

    return (
        <div className="loginPanel">
            <form action="">
                <input type="text" placeholder="Nome" required 
                onInput={(event) => setName(event.target.value)}/>
                <input type="text" placeholder="Senha" required 
                onInput={(event) => setPassword(event.target.value)}/>
                <button className="authenticate"
                onClick={gotoHomeFunction}>
                    ENTRAR
                </button>

                <span id="forgotPassword">Esqueci a senha</span>

                <button className="newAccount"
                onClick={gotoRegisterFunction}>
                    Criar uma conta
                </button>
            </form>
        </div>
    )
}

export default Login;