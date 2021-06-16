import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import {UserContext} from "../../providers/UserProvider"


function Register(props) {
    const {userAdd, userExists} = useContext(UserContext)

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [passwordConfirmation, setPasswordConfirmation]=useState("")
    const move = useHistory()

    const inputValidation = (event) => {
        event.preventDefault()
        document.getElementById("blank-error").innerHTML=""
        document.getElementById("name-error").innerHTML=""
        document.getElementById("password-error").innerHTML=""
        document.getElementById("password-confirmation-error").innerHTML=""
        console.log("Nome: "+name + '\n'+ "Email: "+email+ '\n'+ "Senha: "+password+ '\n'+ "Confirmação de senha:"+passwordConfirmation)
        if ((name==="")||(email==="")||(password==="")||(passwordConfirmation==="")) {
            console.log("Preencha todos os campos!")
            document.getElementById("blank-error").innerHTML="Preencha todos os campos"
        }

        if (password != passwordConfirmation) {
            console.log("Senha não bate")  
            document.getElementById("password-confirmation-error").innerHTML="SENHAS NÃO BATEM"

        }
        if ((name)&&(email)&&(password)&&(passwordConfirmation)){
            userAdd({
                "name":name,
                "email":email,
                "password":password
            })
            console.log("ok")
        }
    }

    const gotoLoginFunction = () => {        
        move.push(`/`);
    }

    useEffect(()=>{
       const checkUser = userExists(name)
       if (checkUser == false) {
           console.log("USUARIO JA EXISTE")
           document.getElementById("name-error").innerHTML="Nome indisponível"
       } else {
           return 0
       }
    },[name])

    return (
        <div className="loginPanel">
            <form action="">
                <h1>Cadastro</h1>
                <span id="blank-error" className="input-error"></span>
                <input type="text" placeholder="Nome" required 
                onInput={(event) => setName(event.target.value)}/>
                <span id="name-error" className="input-error"></span>

                <input type="text" placeholder="E-mail" required
                onInput={(event) => setEmail(event.target.value)}/>
                <span id="email-error" className="input-error"></span>

                <input type="text" placeholder="Senha" required
                onInput={(event) => setPassword(event.target.value)}/>
                <span id="password-error" className="input-error"></span>

                <input type="text" placeholder="Confirmar senha" required
                onInput={(event) => setPasswordConfirmation(event.target.value)}/>
                <span id="password-confirmation-error" className="input-error"></span>

                <button type="submit" className="authenticate"
                onClick={inputValidation}>
                    ENVIAR
                </button>
            </form>
        </div>
    )
}

export default Register;