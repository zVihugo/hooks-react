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

//Importando o HookUseCallback
import HookUseCallback from "../components/HookUseCallback"


//Importando o HookUseMemo
import HookUseMemo from "../components/HookUseMemo"

//Importando o HookUseLayoutEffect
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"

//Importando o HookUseImperativeHandle
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"

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
            <HookUseCallback/>
            <HookUseMemo/>
            <HookUseLayoutEffect/>
            <HookUseImperativeHandle/>
        </div>
    )
}

export default Home