import React from 'react'
import { Productlistmodbig } from './Productlismodbig'

export default function ProductslistBig(props) {
    const { data } = props
    let getprod = (a) => {
        return (
            <div className='Productlistbig'>
                <div className='Productlist-titlebig'>
                    <h4>{a}</h4>
                    <div className='nextbtn'>
                        <p>&gt;</p>
                    </div>
                </div>
                <div className='Productlist-desbig'>
                    {Productlistmodbig[a].map((res, idx) => (
                        <>
                            <div className='Productlist-des-blockbig' key={idx}>
                                <div className='Productlist-des-block-imgbig'>
                                    <img src={res['imgsrc']} alt="" />
                                </div>
                                <div className='Productlist-des-block-pbig'>
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
            {
                
                getprod(data)

            }<br />

        </>

    )
}
