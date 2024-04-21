import React, { useEffect, useState } from 'react';

export default function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    let pre=()=>{
        currentImageIndex > 1 ? setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length) : setCurrentImageIndex(images.length-1)
    }
    let next = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }


    const images = [
        'https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ceb25a1e133b7c45.jpg?q=20',
        'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c8f548688def283c.jpg?q=20',
        'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7cac5455bc76f32a.jpg?q=20',
        'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/93b99990a7fa61d6.jpg?q=20',
        'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bd94c9e6358f3a70.jpg?q=20',

    ];

    return (
        <div className='scr'>
            <div className='imagesscroll'>
                <div className='Prebtn' onClick={pre}>
                    <p>&lt;</p> </div>
                <img  src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <div className='Nextbtn' onClick={next}><p>&gt;</p> </div>
            </div>
        </div>
    );
}
 
 

