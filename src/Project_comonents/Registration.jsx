import React, { useState } from "react";
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';



function Registration() {

    const [Ppassword, setPassword] = useState('')
    const [ ConfirmPassword, setConfirmPassword] = useState('')
    const [value, setValue] = useState('')

    
    function checkPassword(a) {
        a.preventDefault()
        let term = /^[a-zA-Z0-9]{4,8}$/gm

    }


    return ( 
        <>
            <div className="container-fluid Registration_container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 registration_box">
                        <div className="Reg_title">Регистрация </div>
                        <form action="" className="Reg_form">
                            <div className="reg_inputs">
                                <input type="email" placeholder="Почта"/>
                            </div>
                            <div className="reg_inputs">
                                <input type="text" placeholder="Имя"/>
                            </div>
                            <div className="reg_inputs">
                                <input type="password"  placeholder="Пароль" id="Password"/>
                                <i class="fa-regular fa-eye-slash"></i>
                            </div>
                            <div className="reg_inputs">
                                <input type="password"  placeholder="Повторить пароль" id="confirmPassword"/>
                                <i class="fa-regular fa-eye-slash"></i>
                            </div>
                               
                            <input type="checkbox" id="check_input"/>
                            <label htmlFor="check_input" className="mx-2">Запомнить меня</label>
                                
                            <p id="message" ></p>
                            <button onClick={checkPassword()}>Подтвердить</button>

                            <a href="#" className="Reg_a">
                                <img src={facebook} alt="" />
                                <img src={google} alt="" />
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Registration;