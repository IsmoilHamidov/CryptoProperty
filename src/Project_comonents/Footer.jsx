import React from "react";
import footer_img1 from '../images/footer img1.png'
import nav_img from '../images/nav_image.png';
import telegram from '../images/telegram.png';
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import discord from '../images/discord_icon_130958 1.png';



function Footer() {
    return ( 
        <> 

            <div class="Footer">
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
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