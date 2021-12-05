import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ( {id}) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/products/${id}`)
            .then((response) => response.json())
            .then(respJSON => { setItem(respJSON.results[0]); setLoading(false)})
            .catch(error => console.log('Error: ', error))
        }, 5000);
    }, [id])
    return (
        <>
            {
                loading ?
                <p>Cargando detalle de producto.</p>
                :
                <ItemDetail item={params.id} />
            }
            
        </>
    )
}

export default ItemDetailContainer
