import React from 'react';

export default function ItemPrice(props) {
  const { currencyCode, price } = props;

  if (currencyCode === 'USD') {
    return <p className="item-price">${price}</p>;
  } else if (currencyCode === 'EUR') {
    return <p className="item-price">€{price}</p>;
  } else {
    return <p className="item-price">{price} GBP</p>;
  }
}
