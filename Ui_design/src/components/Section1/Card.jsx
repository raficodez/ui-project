import React from 'react'
import Cardcontent from './Cardcontent'

const Card = (props) => {
  return (
         <div className='h-full w-1/3 shrink-0 bg-green-900 rounded-3xl relative overflow-hidden'>
        <img className='h-full w-full object-cover postion-' src={props.img} alt="" />
        
    <Cardcontent color={props.color} id={props.id} tag={props.tag} />
      </div>
   )
}

export default Card
