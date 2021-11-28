import React, {useState} from 'react'


const ItemCount = ({ stock, initial }) => {
        const [counter, setCounter] = useState(initial);
    
    

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

export default ItemCount
