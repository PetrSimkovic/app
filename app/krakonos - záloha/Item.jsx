import React from 'react';
import style from './item.module.css';

export default function Item({ name, price, img }) {
  return (
    <div className={style.item}>
      <img src={img} alt={name} className={style.image} />
      <div className={style.name}>{name}</div>
      <div className={style.price}>{price}</div>
    </div>
  );
}
