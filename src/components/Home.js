import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import DrawerCart from './DrawerCart';

class Home extends Component {

  state = {
    items: [
      {
        id: 1,
        name: 'Item 1',
        price: '1.00',
        img: 'smile'
      },
      {
        id: 2,
        name: 'Item 2',
        price: '2.00',
        img: 'frown'
      },
      {
        id: 3,
        name: 'Item 3',
        price: '3.00',
        img: 'meh'
      }
    ],
    cart: {},
    visible: false
  };

  handleItem = id => {
    let { items, cart } = this.state;
    let item = items.find(item => item['id'] === id);
    item.qty = cart[item.id] ? cart[item.id].qty + 1 : 1;
    item.total = item.qty * parseFloat(item.price);
    cart = { ...cart, [item.id]:item };
    this.setState({ cart, visible: true });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { items, visible, cart } = this.state;
    return (
      <div style={{ display: 'flex', width: '100vw', height: '90vh', alignItems: 'center', justifyContent: 'center' }}>

      {items.map(item => (
        <Card 
          key={item.id}
          hoverable 
          style={{ width: 240, marginLeft: 50}} 
          cover={<Icon type={item.img}/>}
          actions={[
            <span onClick={() => this.handleItem(item.id)}><Icon type="shopping-cart"/>Add to cart</span>
          ]}
        >

          <Card.Meta title={item.name} description={item.price}/>

        </Card>
      ))}

        <DrawerCart visible={visible} onClose={() => this.setState({ visible: false })} cart={cart}/>

      </div>
    )
  }
}

export default Home;