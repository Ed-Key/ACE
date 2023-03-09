import "../styles/main.css";
import React, { useState, useEffect } from "react";


function Slideshow() {
    //Create a useState to keep track of current index of 
    //photo
    const [index, setIndex] = useState(0);

    //Using require.context to dynamically import images from 
    // pictures folder, to show on slideshow

    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('./pictures', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index, images]);


    /*                         BUG SOLUTION:
        Some images donn't fit the div to show everybody correctly,
        so creating a function to change the position for each index to 
        correctly fit solves that issue
    */
    const getBackgroundPosition = () => {
        if (index === 0) {
            return 'center 30%';
        } else if (index === 3){
            return 'center 65%';
        } else {
            return 'center 50%';
        }
    };
    
    /*
                    Buttons to handle slideShow images
    */
    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setIndex((index + 1) % images.length);  
    };

    return (
        <div 
            className="Slideshow"
            style={{
                backgroundImage: `url(${images[index]})`,
                backgroundPosition: getBackgroundPosition(),
            }}
        >
            <div className="prev" onClick={prevSlide}>
                ❰
            </div>
            <div className="next" onClick={nextSlide}>
                ❱
            </div>


    
        </div>
    );
}

export default Slideshow;