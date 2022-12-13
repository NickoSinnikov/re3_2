import React from 'react';

export default function ItemTitle(props) {
  const { title } = props;
  if (title.length > 50) {
    return <p className="item-title">{title.substr(0, 50) + '...'}</p>;
  } else {
    return <p className="item-title">{title}</p>;
  }
}
