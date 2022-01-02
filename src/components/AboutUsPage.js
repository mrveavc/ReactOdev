/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from "./our-story.jpg";
export default function Candidates() {

    return (
        <div class="candidates">
            <h1>ABOUT US</h1>
            <div style={{ paddingTop: "30px" }}>
                <div class="our-story" >
                    OUR STORY
                </div>
                <div class="title">
                    <h2>
                        Testinium is an all-in-one open-source based, enterprise ready platform unifies all the functionality you need to shift testing left - and right.
                    </h2>
                </div>
                <div class="title">
                    <span>We empower millions of customers around the world to make their softwares perfect with our smart testing solutions, award-winning support, and inspiring technologies.

                        Founded in 2010 and headquartered in Istanbul with additional offices in Amsterdam, London and Berlin. </span>
                </div>
                <div class="image" >
                    <img class="img" src={logo} alt="Testinium" ></img>
                </div>
            </div>
            <footer>
                <p>Testinium</p>               
                <a class="social-media" href="https://github.com/Testinium">Github</a><br/>
                <a class="social-media"href='https://www.linkedin.com/company/testinium/'>Linkedln</a><br/>
                <a class="social-media"href='https://twitter.com/testinium'>Twitter</a><br/>
                <a class="social-media"href='https://www.facebook.com/testinium/'>Facebook</a>
            </footer>
        </div>
    );

}

