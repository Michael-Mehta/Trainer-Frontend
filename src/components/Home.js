import React, { useEffect, useRef, useState } from 'react';
import HomeVideo from './HomeVideo';

import image1 from './trainingpic1.png';
import image2 from './trainingpic2.png';
import image3 from './trainingpic3.png';

const Home = () => {



    return (
        <div>
            <HomeVideo />

            <div className='quote-container'>
            <blockquote className="quote">
      
            <p>
                At Chandler Training, we are committed to providing 
                the best service to our clients. Our team of experienced and certified 
                trainers is dedicated to helping you achieve your fitness goals, 
                whether you want to lose weight, build muscle, or improve your 
                overall health. We take a personalized approach to every client, 
                creating individualized workout plans and nutrition recommendations 
                based on your unique needs and preferences.We are here to 
                support you every step of the way, providing ongoing guidance and 
                motivation to help you stay on track and achieve lasting results. 
                With our proven track record of success and dedication to 
                excellence, you can trust us to deliver the best personal training 
                experience available.
                </p>

                <cite>Chandler Training Team</cite>
     
            </blockquote>
                
            </div>
            <div className='training-reasons'>
                <img src = {image1} alt = 'training reason'/>
                <img src = {image2} alt = 'training reason'/>
                <img src = {image3} alt = 'training reason'/>

            </div>

        </div>
    )
}


export default Home;