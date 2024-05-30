//importando o hookUseState

import HookUseState from "../components/HookUseState"

//Importando o hookeUseReducer

import HookUseReducer from "../components/HookUseReducer"

//Importando o HookUseEffect

import HookUseEffect from "../components/HookUseEffect"


//Importando o useContext e someContext
import {useContext} from 'react'
import {someContext} from '../components/HookUseContext'

//Importando o HookUseRef
import HookUseRef from "../components/HookUseRef"


const Home = () => {
    const {contextValue} = useContext(someContext);
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <br />
            <h2>Context</h2>
            <p>{contextValue}</p>
            <hr />
            <HookUseRef />
        </div>
    )
}

export default Home