import React, { useState } from 'react';
import Images from '../Images/Images';
import { useEffect } from 'react';


const ImagesDetails = () => {
    
    const[images, setImages] = useState({});

    useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
     .then (res => res.json())
     .then (data => setImages(data))
    }, []);

    return (
        <div>
            {
                images.map(image => <Images image={image}></Images>)
            }
        </div>
    );
};

export default ImagesDetails;