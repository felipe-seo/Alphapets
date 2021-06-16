import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login/'
import Register from '../pages/Register/'
import React from 'react'
import PassReset from '../pages/PassReset/'
import NewPass from '../pages/NewPass/'
import Home from '../pages/Home/'
import ListAppointment from '../pages/ListAppointment/'
import CreateAppointment from '../pages/CreateAppointment/'
import RegisterPet from '../pages/RegisterPet/'

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>  

            <Route path="/registerpet">
                <RegisterPet />
            </Route>

            <Route path="/createappointment">
                <CreateAppointment />
            </Route>

            <Route path="/listappointment">
                <ListAppointment />
            </Route>

            <Route path="/home">
                <Home />
            </Route>

            <Route path="/newpass">
                <NewPass />
            </Route>    

            <Route path="/passreset">
                <PassReset />
            </Route>            

            <Route path="/register">
                <Register />
            </Route>
     
            <Route exact path="/">
                <Login />
            </Route>

            </Switch>
        </BrowserRouter>
    )
}