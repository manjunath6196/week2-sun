import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './restarent-items.styles.scss';

const RestarentItems = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    
  </div>
  
);

export default withRouter(RestarentItems);
