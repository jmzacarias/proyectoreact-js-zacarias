import React, { useEffect, useState } from 'react';
import Item from './components/Item/Item';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users')
            .then((response)=> response.json())
            .then((json)=> setProducts(json));
    }, [])
    return (
        <div className='ProductContainer'>
          <h1>Productos</h1>
          <div className='Item'>{products.map((product)=>{
              return <Item data={product} key={product.id}/>;
          })}</div>
        </div>
    );
};

export default ItemList;

