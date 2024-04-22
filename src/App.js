import React from 'react'
import Header from './Header'
import Options from './Options'
import ImagesScroll from './ImagesScroll'
import Productslist from './Productslist'
import ProductslistBig from './ProductslistBig'

export default function App() {
  return (
    <>
      <Header />
      <div className='screen'>
        <Options />
        <br/>
        <ImagesScroll/>
        <br/>
        <Productslist data={'Best Of Electronics'} />
        
        <Productslist data={'Beauty,Food,Toys & more'} />
        <div className='productlistbigblock'>
          <ProductslistBig data={'Summer Decor & Furnishing'} />
          <div className='productlistbigblock-img'>
            <img  src='https://rukminim1.flixcart.com/www/1070/750/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80' />
       </div>
            </div>
        <br/>
        <div className='productlistbigblock'>
          <ProductslistBig data={'Shop Student Essentials'} />
          <ProductslistBig data={'Festival Specials, Just For You!'} />
          <ProductslistBig data={'Latest Summer Styles'} />
        </div>
        <br/>
        <Productslist data={'Home & Kitchen Essential'}/>
        <br/>
      </div>
    </>
    
  )
}
