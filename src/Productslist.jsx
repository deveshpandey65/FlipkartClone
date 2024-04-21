import React from 'react'
import { Productlistmod } from './Productlismod'

export default function Productslist(props) {
    const { data } = props
    let getprod = (a) => {
        return (
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
            {
                data === 'Best Of Electronics' ? 
                    <div className='electronics'>
                        {getprod('Best Of Electronics')}
                        <div className='electronics-box'>
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20" alt="" />
                        </div>
                    </div> 
                    : getprod(data)

            }<br />

        </>

    )
}
