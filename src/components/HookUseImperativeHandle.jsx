import {useRef} from "react";

import SomeComponents from "./SomeComponents";

const HookUseImperativeHandle = () => {

    const inputRef = useRef();

    return (
        <div>
            <h2>HookUseImperativeHandle</h2>
            <SomeComponents ref={inputRef}/>
            <button onClick={() => inputRef.current.validate()}>Validate</button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHandle