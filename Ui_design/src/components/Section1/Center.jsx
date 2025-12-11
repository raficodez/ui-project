import React from 'react'
import Lefttext from './Lefttext'
import Imagecontainer from './Imagecontainer'

const Center = (props) => {
  return (
    <div className='h-130 w- full m-5 p-9 flex gap-10'>
      <Lefttext />
      <Imagecontainer users={props.users}/>
      
    </div>
  )
}

export default Center
