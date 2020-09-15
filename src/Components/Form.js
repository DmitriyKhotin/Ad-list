import React, { useState } from "react";
import '../styles/Form.css'

function Form(props) {
  const [options] = useState([
    {id: 1, value: 'Москва'},
    {id: 2, value: 'Санкт-Петербург'},
    {id: 3, value: 'Казань'},
    {id: 4, value: 'Нижний Новгород'}
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  
  function handlePhone(event) { // +7 (xxx) xxx-xx-xx
    const string = event.target.value
    const phnLength = phone.length
    const strLength = string.length
    
    if (strLength > phnLength) {
      const key = string[strLength - 1]
      
      if (0 <= key && key <= 9) {
        if (!phone)
          setPhone(`+7 (${key}`)
        else if (phnLength <= 6)
          setPhone(phone + `${key}` + (phnLength === 6 ? ') ' : ''))
        else if (phnLength === 7)
          setPhone(phone + ') ' + `${key}`)
        else if (9 <= phnLength && phnLength <= 11)
          setPhone(phone + `${key}` + (phnLength === 11 ? '-' : ''))
        else if (phnLength === 12 || phnLength === 15)
          setPhone(phone + '-' + `${key}`)
        else if (13 <= phnLength && phnLength <= 14)
          setPhone(phone + `${key}` +( phnLength === 14 ? '-' : ''))
        else if (16 <= phnLength && phnLength <= 17)
          setPhone(phone + `${key}`)
      }
      
    } else if (strLength < phnLength) {
      const phnLength = phone.length
      let value
      
      if (phnLength === 17 || phnLength === 16 || phnLength === 14 || phnLength === 13)
        value = phone.slice(0, phnLength - 2)
      else if (phnLength === 10 || phnLength === 9)
        value = phone.slice(0, phnLength - 3)
      else if (phnLength === 5)
        value = ''
      else value = phone.slice(0, phnLength - 1)
      
      setPhone(value)
    }
  }
  function handleSubmit(event) {
    props.setState([{id: Date.now(), title, body, phone, city}, ...props.state])
    setTitle('')
    setBody('')
    setCity('')
    setPhone('')
    event.preventDefault()
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='form'>
      <legend className='form__head'>Объявление</legend>
      <p className='item'>
        <label className='item__title'>Название</label>
        <textarea
          className='item__body textarea'
          maxLength={140}
          required={true}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p className='item'>
        <label className='item__title'>Текст объявления</label>
        <textarea
          className='item__body textarea'
          value={body}
          onChange={e => setBody(e.target.value)}
          maxLength={300}
        />
      </p>
      <p className='item'>
        <label className='item__title'>Телефон</label>
        <input
          className='item__body'
          type='tel'
          placeholder='+7 (ххх) ххх-хх-хх'
          value={phone}
          onChange={handlePhone}
          pattern="\+7\s[\(][0-9]{3}[\)]\s\d{3}[-]\d{2}[-]\d{2}"
          required={true}
        />
      </p>
      <p className='item'>
        <label className='item__title'>Город</label>
        <select
          className='item__body'
          value={city}
          onChange={e => setCity(e.target.value)}
        >
          <option>Выберите город</option>
          {options.map(option => <option value={option.value} key={option.id}>{option.value}</option>)}
        </select>
      </p>
      <input className='form__handler' type='submit' value=''/>
    </form>
  );
}

export default Form;


