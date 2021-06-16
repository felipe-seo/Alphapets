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
                <div className="animalCard">
                    <div className="leftAnimalCard">
                        <span>Criar serviço</span>
                        
                    </div>
                    <div className="animalDescription">
                        Nulla facilisi. Donec mollis convallis accumsan. Nulla mi sem, tincidunt eu nunc sed, gravida placerat enim. Fusce id elementum ligula. Duis vel rhoncus lorem. Nulla id convallis ligula. Nam non risus nisi. Aliquam erat volutpat. Nullam aliquet finibus quam ac convallis. Nunc et tortor arcu. Duis commodo egestas leo, in suscipit augue molestie commodo.
                    </div>
                </div>
            </div>
            
        </div>    
    )
}

export default Home;