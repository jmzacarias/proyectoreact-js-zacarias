import React, {useState} from 'react'
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [stock] = useState(20);
    

    return (
        <section className='counterContainer'>
            <p>Counter: {counter}</p>
            <div className='counterBtn'>
                <button onClick={()=> {
                    if (counter < stock) {setCounter(counter + 1)}}}>Agregar</button>
                <button onClick={()=> {
                    if (counter > 0) {setCounter(counter - 1)}}}>Disminuir</button>
            </div> 
        </section> 
    )
}

export default Counter
