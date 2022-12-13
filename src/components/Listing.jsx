import React, { Component } from 'react';
import ItemTitle from './ItemTitle';
import ItemPrice from './ItemPrice';
import ItemQuantity from './ItemQuantity';
export default class Listing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const template = this.props.items.map((item, index) => {
      if (item.state === 'active') {
        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN}></img>
              </a>
            </div>
            <div className="item-details">
              <ItemTitle title={item.title} />
              <ItemPrice currencyCode={item.currency_code} price={item.price} />
              <ItemQuantity quantity={item.quantity} />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return <div>{template}</div>;
  }
}
