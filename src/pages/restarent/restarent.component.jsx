
import React from 'react';

import RESTARENT_DATA from './restarent.data.js';

import MenuItems from '../../components/menu-item/menu-item.component';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class RestarentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: RESTARENT_DATA[this.props.match.params.id].items
    }
  }

  render() {
    const { collections } = this.state;
    return (<div className="restarentpage">
        {
          collections.map(({id,title,imageUrl})=>(
            <MenuItems key={id} title={title} imageUrl={imageUrl}></MenuItems>
        ))
      }
      </div>
      )
  }
};

export default RestarentPage;

