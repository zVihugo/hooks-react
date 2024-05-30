import {useReducer, useState} from "react";


const HookUseReducer = () => {
    // Começando com o useReducer
    //eslint-disable-next-line
    const [number, dispatch] =useReducer((state, action) => {
        return Math.random(state)
    })

    
    // Avançando no reducer

    const initialTaks = [
        {id: 1, text: "Make someone happy"},
        {id: 2, text: "Make someone sad"},
        {id: 3, text: "Make someone angry"},
        {id: 4, text: "Make someone cry"},
    ]

    
    const [taskText, setTaskText] = useState("");

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                // eslint-disable-next-line no-case-declarations
                const newTask = {
                    id: Math.random(),
                    text: action.text,
                };
                setTaskText("");
                return [...state, newTask]
            case "REMOVE":
                return state.filter(task => task.id !== action.id)
           
            default:
                return state;
        }

    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTasks({type: "ADD", text: taskText})
        setTaskText("")
    }

    const removeTask = (id) => {
        dispatchTasks({type: "REMOVE", id})
    }

    return (
        <div>
            <h2>
                UseReducer
            </h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Clique aqui pelo amor de Deus!!!!!</button>
            <hr />
            <h2>Tarefas:    </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
                <input type="submit" value="enviar"/>
            </form>
            {tasks.map(task => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        </div>
    )
}

export default HookUseReducer