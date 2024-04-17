// AuthPage.js
import { useState } from 'react';
import styles from './Auth.module.scss';
import SignUp from "../../components/SignUp/SignUp"
import Login from "../../components/Login/Login"
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUp setUser={props.setUser}/>
            <Login setUser={props.setUser}/>
            <UserLogOut setUser={props.setUser}/>



        </main>
    )
}