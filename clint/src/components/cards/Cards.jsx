import React from 'react'
import './cards.scss'
import Card from '../card/Card'

const Cards = ({title,color,display}) => {
  return (
    <div className='cards'>
        <div className="header">
            <div className="text">

                <div className="shape" style={{background:color,display:display}}></div>
                <span >{title}</span>
            </div>
            <span className='number'>0</span>
        </div >
        <div className="wrapper">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        
    </div>
  )
}

export default Cards