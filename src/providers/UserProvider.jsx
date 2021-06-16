import React, { useState, createContext } from 'react'
import { useHistory } from "react-router-dom"

export const UserContext = createContext({})

export const UserProvider = (props) => {
    
    const[users, setUsers] = useState(()=>{
        const storageUser = localStorage.getItem("@alphauser:user")
        if (storageUser) {
            return JSON.parse(storageUser)
        }
        return []
    })

    const userLogin = (args) => {
        console.log(args)
        const userScan = users.findIndex(user => user.name == args.name)
        if (userScan == -1) {
            return "Usuário não encontrado"
        } else {
            if (users[userScan].password == args.password) {
                //move.push('/home')
                return "success"
            } else {
                return "Senha incorreta"
            }
        }
    }

    const userExists = (args) => {
        const userScan = users.findIndex(user => user.name == args)
        if (userScan == -1) {
            return true
        } else {
            return false
        }
    }

    const userAdd = (args) => {
        const usersContent = users
        console.log(usersContent)
        usersContent.push(args)
        localStorage.setItem("@alphauser:user", JSON.stringify(usersContent))
        setUsers(usersContent)
        console.log(users)
    }
    return(
        <UserContext.Provider value={{userAdd, userLogin, userExists}}>
            {props.children}
        </UserContext.Provider>
        )
}