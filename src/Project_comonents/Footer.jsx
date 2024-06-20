import React from "react";
import nav_img from '../images/nav_image.png';
import telegram from '../images/telegram.png';
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import discord from '../images/discord_icon_130958 1.png';



function Footer() {
    return ( 
        <> 

            <div className="Footer">
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>


                <div className="footer_info">
                    <img src={nav_img} alt="footer rasm" className="footer_Image"/>
                    <p className="m-0">© 2021 НАЗВАНИЕ</p>
                    <a href="#" className="Nav_Logos">
                        <img src={telegram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={google} alt="" />
                        <img src={discord} alt="" />
                    </a>
                </div>
            </div>


        </>
    );
}

export default Footer;