import {useState, useEffect, useLayoutEffect} from 'react';


const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome aqui dentro!")

    useEffect(() =>{
        console.log("UseEffect");
        setName("Nome alterado usando o useEffect")
    }, []);

    useLayoutEffect(() => {
        console.log("UseLayoutEffect");
        setName("Nome alterado usando o useLayoutEffect")
    },[])

    console.log(name);

    return (
        <div>
            <h2>UseLayoutEffect</h2>
            <hr />
        </div>
    )
}

export default HookUseLayoutEffect