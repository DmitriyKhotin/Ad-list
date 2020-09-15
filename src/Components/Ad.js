import React, { useState } from "react";
import '../styles/Ad.css'

function Ad(props) {
  
  return (
    <div className='post'>
      <button className='post__deleteBtn' onClick={() => props.filter(props.ad.id)}/>
      <p className='item'>
        <label className='item__title'>Название</label>
        <textarea
          className='item__body textarea'
          value={props.ad.title}
          readOnly={true}
        />
      </p>
      <p className='item'>
        <label className='item__title'>Текст объявления</label>
        <textarea
          className='item__body textarea'
          value={props.ad.body}
          readOnly={true}
        />
      </p>
      <p className='post__about'>{props.ad.city} {props.ad.phone}</p>
    </div>
  );
}

export default Ad;

