import React from 'react'
import Navbar from './Navbar'
import Center from './Center'


const section1 = (props) => {
  return (
    <div className='h-screen w-full  p-10 mb-5'>
  
    <Navbar />
    <Center users={props.users} />
    </div>
  )
}

export default section1
