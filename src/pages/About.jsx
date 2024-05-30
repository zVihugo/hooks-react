//Importando o useContext e someContext
import {useContext} from 'react'
import {someContext} from '../components/HookUseContext'

const About = () => {
  const {contextValue} = useContext(someContext);
  return (
    <div>
        <h1>Welcome to the About page!</h1>
        <h2>Context</h2>
        <p>{contextValue}</p>
    </div>
  )
}

export default About