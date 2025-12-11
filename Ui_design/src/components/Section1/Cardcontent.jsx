import React from 'react'

const Cardcontent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between p-4'>
        <h2 className='bg-white w-8 h-8 flex justify-center items-center rounded-full'>{props.id+1}</h2>
        <div >
          <p className='text-xl w-[90%] font-medium text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className='pt-4 flex justify-between'>
            <button style={{background:props.color}} className='rounded-full py-1 px-10 text-gray-500'>{props.tag}</button>
            <button className='bg-blue-300 rounded-full px-3'><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardcontent
