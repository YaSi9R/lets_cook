import React, { useState } from 'react';

import "./InPage.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import myImage from '../components/Assets/1.jpg'
import Carousel from './Carousel';

const InPage = () => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/'); // Navigate to the home page or any other route
    };
    return (
        <div className="wrapp">
            {/* <img src={process.env.PUBLIC_URL + '/Login_page1.png'} alt="Let's_Cook_logo" className="Login-background_image" /> */}


            <div className='wrapp-header'>



                <svg class="inline-block w-9 h-9 mr-1" viewBox="0 0 520 600" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M462.3 31.6C407.5 -15.1 326 -6.7 275.7 45.2L256 65.5L236.3 45.2C186.1 -6.7 104.5 -15.1 49.7 31.6C-13.1 
                      85.2 -16.4 181.4 39.8 239.5L233.3 439.3C245.8 452.2 266.1 452.2 278.6 439.3L472.1 239.5C528.4 181.4 525.1 85.2 462.3 31.6V31.6Z"
                        fill="yellow">

                    </path>

                </svg>

                <span class="wrapp-header-span mr-1 font-Dancing" >Let's Cook/Recipes/Summer
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right"
                        class="w-8 h-8 inline -mt-1" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0
                         16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0
                              16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z">

                        </path>
                    </svg>
                </span>

            </div>


            <FontAwesomeIcon
                icon={faTimes}
                className="exit-icon"
                onClick={handleExit}
            />
            {/* <h1></h1> */}
            <div className='wrapp_form'>
                <div className="aligned">
                    <div className="round-img">
                        <img src={myImage} alt="Image" />
                    </div>
                    <div className="kk">
                        <h2>Summer Recipes</h2>

                        <p className='f'>Summer is the perfect time to enjoy the outdoors and cook up some delicious recipes.</p>

                    </div>

                </div>
            </div>
            <section>
                <div className='wrapp_g1'>
                    <h2 className='head'>*****Top Rated Recipes *****</h2>

                    <Carousel />

                </div>
            </section>

            <section className='tp p-8 px-4 lg:px-0 bg-gray-700'>
                <div class="flex flex-wrap items-center md:max-w-6xl mx-auto">
                    <div class="w-full md:w-1/2 flex items-center justify-center md:justify-start space-x-4 mb-8 md:mb-0">
                        <h5 class="text-sm font-arvo uppercase tracking-widest text-white">Follow Us</h5>
                    </div>
                    <div class="w-full md:w-1/2">
                        <p class="followbar-signup mb-6 leading-3 flex space-x-2 justify-center font-arvo uppercase tracking-widest text-white">
                            <span class="signup">signup </span>
                            <span>for Email Updates</span>
                        </p>
                        <p class="md:hidden mb-4 text-center italic text-white">Get a Free eCookbook with our top 25 recipes.</p>
                    </div>
                </div>

            </section>


            <section className='wrapp_g2'>
                <h2 className='head'>*****SUMMER VIDEOS***** </h2>
                <table>
                    <tr>
                        <td><iframe className='vid-r' src="https://www.youtube.com/embed/ojI0YeG32uY?si=1AqhOV6LX9uZ2Ujz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe></td>
                        <td><iframe className='vid-r' src="https://www.youtube.com/embed/apqE7GOWh5k?si=aVLP4HOhAYSF8TZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </td>
                        <td><iframe className='vid-r' src="https://www.youtube.com/embed/FWV0QNojAG8?si=oF9evSvPsI8Oppfe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </td>
                    </tr>
                </table>




            </section>

        </div>
    );
};

export default InPage;




