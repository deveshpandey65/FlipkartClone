import React from 'react'
import Header from './Header'
import Options from './Options'
import ImagesScroll from './ImagesScroll'
import Productslist from './Productslist'

export default function App() {
  return (
    <>
      <Header />
      <div className='screen'>
        
        <Options />
        <br/>
        <ImagesScroll/>
        <br/>
        <Productslist/>
        <br/>
      </div>
    </>
    
  )
}
