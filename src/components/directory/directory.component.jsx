import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Bangalore',
                  imageUrl: 'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/08/banner_1400x400px-1030x294.jpg',
                  id: 1,
                  linkUrl: ''              
                },
                {
                  title: 'Hydrabad',
                  imageUrl: 'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/08/2018_8_14_Blog_Buffet_Amogham_499_2-1030x538.jpg',
                  id: 2,
                  linkUrl: ''
                
                },
                {
                  title: 'Kochi',
                  imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/04/51/15/89/koi-restaurant.jpg',
                  id: 3,
                  linkUrl: ''
                 
                },
                
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id}  {...otherSectionProps}/>        
                  ))
                }
            </div>
        )
    }
}

export default Directory;