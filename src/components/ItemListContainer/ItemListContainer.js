import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({greeting}) => {

    return (
        <div className='ItemListContainer'>
            <h1 className='ItemListTitleContainer-Title'>
                {greeting} 
            </h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;
