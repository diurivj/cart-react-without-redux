import React, { Component } from 'react';

class Cart extends Component {

  componentWillMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) this.setState({ cart }) 
  }

  state = {
    cart: null
  }

  render() {
    const { cart } = this.state;
    if (!cart) return <p>The cart is empty</p>;
    let total = Object.values(cart).reduce((a, b) => a.total + b.total);
    console.log(total);
    return (
      <div>

        {Object.values(cart).map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.total}</p>
          </div>
        ))}
          <h2>Total {total}</h2>
      </div>
    )
  }
}

export default Cart;

