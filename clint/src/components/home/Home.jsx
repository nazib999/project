import React from 'react'
import './home.scss'
import Cards from '../cards/Cards'

const Home = () => {
  return (
    <div className='home'>
        <Cards title='Incomplete' color='red' />
        <Cards title='To Do' color='teal'/>
        <Cards title='Doing' color='yellow'/>
        <Cards title='Under Review' display='none'/>
        <Cards title='Completed' display='none'/>
    </div>
  )
}

export default Home