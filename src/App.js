import React from 'react'
import Header from './Header'
import Options from './Options'
import ImagesScroll from './ImagesScroll'

export default function App() {
  return (
    <>
      <Header />
      <div className='screen'>
        <br/>
        <Options />
        <br/>
        <ImagesScroll/>
      </div>
    </>
    
  )
}
