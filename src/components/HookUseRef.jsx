import {useEffect, useState, useRef} from "react";


const HookUseRef = () => {
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0); 

    // useEffect(() => {
    //     numberRef.current = numberRef.current + 1;
    //     setCounter(counter + 1);
    // }
    // )

    //Use ref e dom
    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        
        console.log(inputRef.current.value);
        setText("")
        inputRef.current.focus()
    }

    return (
        <div>
            {/* useRef sem DOM */}
            <h2>useRef</h2>
            <p>O componente renderizou:{numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            {/* use ref com DOM */}
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <input type="submit" value="Enviar"/>
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef