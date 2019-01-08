import React from 'react';
import { Drawer, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

const DrawerCart = ({ visible, onClose, cart }) => {
  if (cart === {}) return <p>The cart is empty</p>
  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={onClose}
      visible={visible}
    >

      {Object.values(cart).map(item => (
        <span key={item.id}>
          <Icon type={item.img}/>
          <br/>
          <strong>{item.name}</strong>
          <p>Qty: {item.qty}</p>
          <p>Price: {item.price} x {item.qty}</p>
        </span>
      ))}

      <Link to='/cart'>
        <Button>Proceder al pago</Button>
      </Link>

    </Drawer>
  )
}

export default DrawerCart;