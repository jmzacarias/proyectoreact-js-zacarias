import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const ItemView = () => {
    const params = useParams();
    console.log('params', params)
    return (
        <div>
            <ItemDetailContainer itemId={params.id}/>
        </div>
    )
}

export default ItemView
