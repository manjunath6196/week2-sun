import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';

const MenuItem = ({ title, id, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image'
        style={{backgroundImage: `url(${imageUrl})`
        }}/>
      <div className='content'>
        <h1 className='title'>{title}</h1> 
        <Link to={'/restarents/'+id}><span className='subtitle'>CLICK NOW</span></Link>  
      </div>
      
    </div>
    
  );
  
  export default withRouter(MenuItem);