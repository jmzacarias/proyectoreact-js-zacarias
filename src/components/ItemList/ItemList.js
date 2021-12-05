import React from 'react'
import Item from '../Item/Item'
import 'semantic-ui-css/semantic.min.css';
import './ItemList.css';

const ItemList = ( {items }) => {
    return (
        <div className='ItemListContainer-Products'>
            <>
            {
                items.map((item) => (
                   <div key={item.id}>
                       <Item item={item} />
                    </div> 
                ))
            }
            </>
        </div>
    )
}

export default ItemList
