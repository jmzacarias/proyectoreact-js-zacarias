import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574&limit=5')
                .then(response => response.json())
                .then(respJSON => {console.log(respJSON.results); setItems(respJSON.results)})
                .catch(error => console.log('Error: ', error));
        }, 2000);
        }, [])
    return (
        <div className='ItemListContainer'>
            <h1 className='ItemListTitleContainer-Title'>
               OFERTAS
            </h1>
                {
                    items.length > 0 ?
                        <ItemList items={items} />
                        :
                        <p>Cargando...</p>

                }            
        </div>
    )
}
export default ItemListContainer;
