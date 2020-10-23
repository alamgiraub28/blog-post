import React from 'react';


const Images = (props) => {
    const { url } = props.image;



    return (
        <div>
        <img src={url} alt=""/>
        </div>
    );
};

export default Images;