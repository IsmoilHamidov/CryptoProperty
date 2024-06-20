import React, { useState } from "react";
import { Link } from "react-router-dom";
import nav_img from '../images/nav_image.png';
import telegram from '../images/telegram.png';
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import discord from '../images/discord_icon_130958 1.png';




function Navbar() {

    return ( 
    <>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid px-4">
                <Link className="navbar-brand" to="/"><img src={nav_img} alt="rasm bor"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 Nav_links">
                    <li>
                        <Link to="/Main">Главная</Link>
                    </li>
                    <li>
                        <a href="#Sena">Цена монеты</a>
                    </li>
                    <li>
                        <a href="#Ispolzovat">Как использовать</a>
                    </li>
                    <li>
                        <a href="#About_us">О нас</a>
                    </li>
                    <li>
                        <a href="#Preimushestva">Преимущества</a>
                    </li>

                    
                    <li className="Nav_Logos">
                        <a href="#"><img src={telegram} alt="" /></a>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={google} alt="" /></a>
                        <a href="#"><img src={discord} alt="" /></a>
                    </li>
                </ul>
            
                </div>
            </div>
        </nav>
    </>
     );
}

export default Navbar;








