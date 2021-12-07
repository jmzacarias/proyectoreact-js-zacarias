import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ( { item }) => {
    return (
        <div className='ItemDetailContainer'>  
            <div className='ItemDetail'>
                <img src={item.thumbnail} alt={item.title} width={300} />
                <h2>{item.price}</h2>
                <h3>{item.title}</h3>
                <ItemCount stock={5} initial={0} /> 
            </div>
        </div>
    )
}

export default ItemDetail
