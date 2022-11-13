import React from 'react'
import Card from './Card'
import link1 from '../images/image 12.png'
import link2 from '../images/wedding-photography 1.png'
import link3 from '../images/mountain-bike 1.png'
import data from './data'
import images from '../'

const Mainbottom = () => {
    const cards = data.map(item => {
        return (
            <Card 
            img={item.coverImg}
            rating={item.stats.rating} 
            ratingCount={item.stats.reviewCount} 
            country={item.location} 
            title={item.title} 
            price={item.price}
            />
        )
    })

  return (
    <div className='Mainbottom'>
        {cards}
    </div>
  )
}

export default Mainbottom