
import {useCallback, useState} from 'react';

import List from './List';

const HookUseCallback = () => {

    const [counter, setCounter] = useState(0);

    const getItemsFromDatabase = useCallback(() => {
        return [1,2,3,4,5]
    }, [])

  return (
    <div>
        <h2>useCallback</h2>
        <List getItems={getItemsFromDatabase} />
        <p>Contador: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <hr />
    </div>
  )
}

export default HookUseCallback