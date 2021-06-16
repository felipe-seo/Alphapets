import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import UserPic from '../../assets/user.svg'
import CatPic from '../../assets/cat.jpg'

function Home(props) {
    const [user, setUser]=useState("")
    const [password, setPassword]=useState("")
    
    const registerFunction = () => {
        useHistory.push(`/register`);
    }
    return (
        <div className="main-block">
            <div className="leftPanel">
                <Menu/>
            </div>
            <div className="rightPanel">
                <div className="appointmentCard">
                    <div className="leftAppointmentCard">
                        <span>Nome do animal</span>                        
                        data
                    </div>
                    <div className="appointmentDescription">
                        <span>Descrição do serviço</span>
                    </div>
                </div>
            </div>
            
        </div>    
    )
}

export default Home;