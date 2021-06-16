import React from 'react'
import {UserProvider} from './UserProvider'

export default function AppProvider(props) {
    return (
        <UserProvider>
            {props.children}
        </UserProvider>
    )
}
