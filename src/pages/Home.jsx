//importando o hookUseState

import HookUseState from "../components/HookUseState"

//Importando o hookeUseReducer

import HookUseReducer from "../components/HookUseReducer"

//Importando o HookUseEffect

import HookUseEffect from "../components/HookUseEffect"


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
        </div>
    )
}

export default Home