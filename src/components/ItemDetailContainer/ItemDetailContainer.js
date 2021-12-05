import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ( {itemId} ) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${itemId}`)
             .then(response => response.json())
             .then(respJSON => { console.log(respJSON.results); setItem(respJSON.results); setLoading(false)})
             .catch(error => console.log('Error: ', error));
        }, 5000);
    }, [itemId])
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
