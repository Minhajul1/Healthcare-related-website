import React from 'react';
import img from '../../images/post-img.jpg'
import image from '../../images/post-img2.jpg'
import './Post.css'

const Post = () => {
    return (
        <div className="post-container">
            <div className="first-post">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <h2>MODERN SCIENCE THAT YOU CAN TRUST</h2>
                    <p>The common element in modern science, regardless of the specific field or the particular methods being used, is the critical scrutiny of claims. It’s this process—of tough, sustained scrutiny—that works to ensure that faulty claims are rejected and that accepted claims are likely to be right.</p>
                </div>
            </div>
            <div className="second-post">
                <div>
                    <h2>ENTRUST YOUR HEALTH OUR DOCTORS</h2>
                    <p>With decades of experience treating whole families, our physicians can treat all minor medical issues. We Are Located in West Houston Area Our Houston Immediate Care Walk-in Clinic is located at 9778 Katy Freeway, Houston, TX 77055, in the heart of Houston, TX, not too far from Downtown Houston. We take care of the urgent medical needs of the whole family.</p>
                </div>
                <div>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Post;