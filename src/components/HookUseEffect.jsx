import { useEffect, useState } from "react"



const HookUseEffect = () => {

    useEffect(() => {
        console.log("Executei");
    })

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1 );
    }


    //Array de dependencias vazios  

    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, [])

    //Item de array de dep

    const [anotherNumber, setAnotherNumber] = useState(1);
    useEffect(() => {
        console.log("Executei o another number")
    }, [anotherNumber])

    //CleanUp do useEffect
    useEffect(()=> {
        const timer = setTimeout(() => {
            console.log("Executei o timer")
        },2000)

        return () => {
            clearTimeout(timer)
        }
    },[anotherNumber])

    
    return (
        <div>
            <h2>Use Effect</h2>
            <p>Number: {number}</p>
            <button onClick={changeNumber}>Executar!</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Executar outro número</button>
            <hr />
        </div>
    )
}

export default HookUseEffect