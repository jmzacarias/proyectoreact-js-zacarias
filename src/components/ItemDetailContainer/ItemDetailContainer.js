import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574&limit=1')
            .then((response) => response.json())
            .then(respJSON => { setItem(respJSON.results[0]); setLoading(false)})
            .catch(error => console.log('Error: ', error))
        }, 5000);
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
