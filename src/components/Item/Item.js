import React from 'react'
import './Item.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <>
          <Link to={`/item/${item.id}`}> 
            <Card>
                    <Image src={item.thumbnail} alt='imagen' wrapped ui={false} className='ImgCARD' />
                    <Card.Content>
                    <Card.Header>${item.price}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{item.category_id}</span>
                    </Card.Meta>
                    <Card.Description>
                        {item.title}
                    </Card.Description>
                    
                    </Card.Content>
                </Card>
            </Link> 
        </>
    )
}

export default Item
