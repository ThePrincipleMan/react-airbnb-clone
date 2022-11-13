import React from 'react'
import star from '../images/Star 1.png'
import './styles.css'

const Card = (props) => {
  return (
    <div className="Card">
        <img src={`../images/${props.img}`} />
        <div className='stats-firstline'>
            <img src={star} />
            <div>{props.rating}</div>
            <div className='grey'>({props.ratingCount}) • {props.country}</div>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card