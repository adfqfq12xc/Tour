import React from 'react'
import { data } from '../../tourData'
import './About.css'
export default function About() {
  return (
    <div className='aboutPage'>
        <h1>WHY CHOOSE US</h1>
        <div className='containerabout'>
          {data.map((e,index)=>{
            return(
        <div className='aboutcontains'  key={index}>
          <div className='wraping'>
        <img src={e.img} alt=' '/>
        <div>
        <p className='text1'>{e.text1}</p>
        <p className='text2'> {e.text2}</p>
        <p className='text3'>{e.text3}</p>
        </div>
        </div>

        </div>
            )
          })}

        </div>
    </div>
  )
}
