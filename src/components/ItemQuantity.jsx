import React from 'react';

export default function ItemQuantity(props) {
  const { quantity } = props;
  if (quantity < 10) {
    return <p className="item-quantity level-low">{quantity}</p>;
  } else if (quantity > 20) {
    return <p className="item-quantity level-high">{quantity}</p>;
  } else {
    return <p className="item-quantity level-medium">{quantity}</p>;
  }
}
