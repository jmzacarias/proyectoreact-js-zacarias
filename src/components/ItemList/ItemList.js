import React from 'react'
import Item from '../Item/Item'
import 'semantic-ui-css/semantic.min.css';

const ItemList = ( {items }) => {
    return (
        <div>
            <>
            {
                items.map((item) => (
                   <div className='four wide column' key={item.id}>
                       <Item item={item} />
                    </div> 
                ))
            }
            </>
        </div>
    )
}

export default ItemList
