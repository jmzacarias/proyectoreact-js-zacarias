import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ( {itemId} ) => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    


    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${itemId}`)
             .then(r => r.json())
             .then(rJSON => {console.log(rJSON); setItem(rJSON); setLoading(false)})
             .catch(error => console.log('Error: ', error));
        }, 2000);
    }, [])

    return (
        <>
             {
                loading ?
                <p>Cargando detalle de producto.</p>
                :
                <ItemDetail item={item} />
            } 
            
        </>
    )
}

export default ItemDetailContainer
