import React from 'react';

const PhotoDesc = props =>{


    return(
        <section className = "description">
        <h3 className = "phot-date">
            {props.date}
        </h3>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>explanation: {props.explanation}</p>
        </section>
    )

}; 
export default PhotoDesc;