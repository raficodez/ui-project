import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: "royalblue",
      intro: '',
      tag: "Satisfied"
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661596861209-485185b540a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'lightgreen',
      intro: '',
      tag: "Underserved"
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'orange',
      intro: '',
      tag: "Underbanked"
    },
    {
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'pink',
      intro: '',
      tag: "Undergo"
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661638162972-00ee1c6822d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'black',
      intro: '',
      tag: "Average"
    }
  ]
  return (
    <div className=''>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
