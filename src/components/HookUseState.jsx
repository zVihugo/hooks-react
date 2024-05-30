import {useState, useReducer} from 'react'

const HookUseState = () => {
    let userName = "Victor Moreira"

    const [name, setName] = useState("Teste de nome")

    const changeName = () => {
        setName("Vitinho bala tensa do PB")
        userName = "Vitinho bala tensa do CF"
        console.log(userName, name)
    }


    //useState e input
    const [age, setAge] = useState(18);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age);
    }

    

    return (
        <div>
            <h2>UseState</h2>   
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeName}>Clique aqui!</button>
            {/* useState e input */}
            <form onSubmit={handleSubmit}>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value='Enviar' />
            </form>
            <p>Você tem {age} anos!!</p>
        <hr />
        </div>
    )
}

export default HookUseState