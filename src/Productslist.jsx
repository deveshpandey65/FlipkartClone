import React from 'react'
import { Productlistmod } from './Productlismod'

export default function Productslist() {
    let getprod=(a)=>{
        return( 
            <div className='Productlist'>
                <div className='Prebtn'> <p>&lt;</p></div>
                <div className='Productlist-title'>
                    <h4>{a}</h4>
                    <div className='nextbtn'>
                        <p>&gt;</p>
                    </div>
                </div>
                <div className='Nextbtn'> <p>&gt;</p></div>
                <div className='Productlist-des'>
                     {Productlistmod[a].map((res, idx) => (
                    <>
                        <div className='Productlist-des-block' key={idx}>
                            <div className='Productlist-des-block-img'>
                                <img src={res['imgsrc']} alt="" />
                            </div>
                            <div className='Productlist-des-block-p'>
                                <p>{res['para']}</p>
                            </div>
                            <h5>{res['head']}</h5>
                        </div>
                    </>
                     )
                     )}
                </div>
           </div>
    )
    }
  return (
    <>
                {getprod('Best Of Electronics')}  
                <br />
          {getprod('Beauty,Food,Toys & more')}
          <br/>
          {getprod('Home & Kitchen Essential')}
    </>
  )
}
