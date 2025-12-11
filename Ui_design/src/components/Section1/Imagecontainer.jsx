import React from 'react'
import Card from './Card'

const Imagecontainer = (props) => {
  console.log(props.users.color)


  return (
    <div className=' h-full w-3/4 rounded-2xl overflow-x-auto flex flex-nowrap gap-5 '>
   {props.users.map(function(elem,idx){

    return <Card key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
   })}
    </div>

  )
}

export default Imagecontainer
