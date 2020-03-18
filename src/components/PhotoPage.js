import React from 'react';

const PhotoPage = props =>{
   
  // document.querySelector('.mainPhoto').style.backgroundImage =`url(${props.image})`;

    return(
    <section className = "mainPhoto" 
    style = {{backgroundImage: "url("+ props.image + ")" }}>
        
        <section className = "description">
        <h3 className = "photo-date">
            {props.date}
        </h3>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>explanation: {props.explanation}</p>
        </section>
    </section>
    )
}
export default PhotoPage;