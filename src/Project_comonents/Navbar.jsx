import React from "react";
import { Link } from "react-router-dom";
import nav_img from '../images/nav_image.png';
import telegram from '../images/telegram.png';
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import discord from '../images/discord_icon_130958 1.png';




function Navbar() {
    return ( 
    <>
 
        <nav class="Navabar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <Link to="/"><img src={nav_img} alt="rasm bor" /></Link>

                    <ul className="Nav_links navbar-nav ">
                        <li>
                            <Link to="/Main">Главная</Link>
                        </li>
                        <li>
                            <Link to="/Sena">Цена монеты</Link>
                        </li>
                        <li>
                            <Link to="/Ispolzovat">Как использовать</Link>
                        </li>
                        <li>
                            <Link to="/About_us">О нас</Link>
                        </li>
                        <li>
                            <Link to="/Preimushestva">Преимущества</Link>
                        </li>
                    </ul>


                    <a href="#" className="Nav_Logos">
                        <img src={telegram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={google} alt="" />
                        <img src={discord} alt="" />
                    </a>
                </div>
            </div>
        </nav>

    </>
     );
}

export default Navbar;