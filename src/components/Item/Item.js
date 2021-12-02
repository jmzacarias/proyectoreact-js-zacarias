import React from 'react'
import './Item.css';

const Item = ({ item }) => {
    return (
        <>
            <div className='ui cards'>
                <div className='image'>
                    <img src={item.thumbnail} alt='imagen'></img>
                </div>
                <div className='content'>
                    <div className='header'>${item.price}</div>
                    <div className='meta'>{item.category_id}</div>
                    <div className='description'>item.title</div>
                </div>
             
            </div>
        </>
    )
}

export default Item
