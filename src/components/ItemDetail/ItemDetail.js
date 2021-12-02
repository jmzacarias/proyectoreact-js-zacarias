import React from 'react'
import 'semantic-ui-css/semantic.min.css';

const ItemDetail = ( { item }) => {
    return (
        <div>
            <img src={item.thumbnail} alt={item.title} width={300} />
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
        </div>
    )
}

export default ItemDetail
