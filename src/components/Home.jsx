import React from 'react'
import Hero from './Hero'
import line from "../assets/line.png"
import Collection from './Collection'
import Services from './Services'
import Services2 from './Services2'
import Top from './Top'

const Home = () => {
  return (
    <div className=' mt-[100px] '>
        <Hero />
        <div className='h-[200px] w-[200px] ml-[280px]'>
        <img src={line} alt="line/img" className="w-full h-full"/>   
        </div>
        <Collection />
        <Services />
        <Services2 />
        <Top />
    </div>
  )
}

export default Home