import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '5vh', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Menu mode="horizontal" >

        <Menu.Item key='/'>
          <Link to='/'>
            <span><Icon type="home" />Home</span>
          </Link>
        </Menu.Item>
    
        <Menu.Item key='/cart'>
          <Link to='/cart'>
            <span><Icon type="shopping-cart" />Cart</span>
          </Link> 
        </Menu.Item>

      </Menu>
    </div>
  )
} 

export default Navbar;