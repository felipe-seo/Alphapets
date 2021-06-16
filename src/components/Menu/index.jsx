import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import UserPic from '../../assets/user.svg'


function Login(props) {    
    const registerFunction = () => {
        useHistory.push(`/register`);
    }
    return (         
                <ul>
                    <li>                        
                        <img src={UserPic} width="150px" height="150px"/>                        
                    </li>                   
                    <li>
                        <span>Nome do usuário</span>
                    </li>                
                    <li>
                        <Link to="/home">Início</Link>
                    </li>
                    <li>
                        <Link to="/CreateAppointment">Criar agendamento</Link>
                    </li>
                    <li>
                        <Link to="/listappointment">Listar agendamentos</Link>
                    </li>
                    <li>
                        <Link to="/registerPet">Cadastrar pet</Link>
                    </li>
                    <li>
                        <Link to="/">Sair</Link>
                    </li>
                </ul>
            
    
        
    )
}

export default Login;