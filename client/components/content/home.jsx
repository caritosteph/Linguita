import React from 'react';
import { BlazeToReact } from 'meteor/thereactivestack:blazetoreact';

const Login = BlazeToReact('login');
/*global Home*/
export default Home =() =>(
    <div>
        <div className="section no-pad-bot" id="home">
            <div className="container home-title center">
                <br/>
                <h1 className="center">The future of the language exchange is waiting for you</h1>
                <h2>Language exchange whenever you want about whatever you want.</h2>
                <h3>Get free Linguita account</h3>
                <br/>
                <Login/>
            </div>
        </div>
        <div id="intro" className="section scrollspy">
            <div className="container">
                <div className="row">
                    <div  className="col s12 m4 l4">
                        <div className="center promo promo-example">
                            <i className="mdi-social-public"></i>
                            <h5 className="promo-caption">People around the world</h5>
                            <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="center promo promo-example">
                            <i className="mdi-social-group"></i>
                            <h5 className="promo-caption">Make a Language partner</h5>
                            <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="center promo promo-example">
                            <i className="mdi-image-camera-front"></i>
                            <h5 className="promo-caption">Video Chat</h5>
                            <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);