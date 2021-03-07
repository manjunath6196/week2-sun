/*import React from 'react';
import './collection-item.styles.scss';

//functional component

const CollectionItem = ({id,name,price,imageUrl}) => (
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='id'>{id}</span>
                </div>
          </div>
    </div>
)

export default CollectionItem;
*/
  
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} collection-items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
    <div className='content'> 
      <h1 className='title'>{title}</h1>
    </div>
    
  </div>
  
);

export default withRouter(CollectionItem);