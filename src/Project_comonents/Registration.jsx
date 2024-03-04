import React, { useState } from "react";
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';



function Registration() {

    const [Password, setPassword] = useState('')
    const [ ConfirmPassword, setConfirmPassword] = useState('')
    const [value, setValue] = useState('')
    let text = document.getElementById('message')


    function Function_Password(event) {
        event.preventDefault()
        let term = /^[a-zA-Z0-9]{4,8}$/gm

        if(term.test(Password + ConfirmPassword)){
            if(Password ===  ConfirmPassword){
                setValue("Pasword matched")
                text.style.color = "green"
            }
        }
        else{
            setValue("Password didn't match. Please include according to [a-zA-Z0-9]{4,8}")
            text.style.color = "red"
        }
    }

    function FirstInput(f) {
        setPassword(f.target.value)
    }
    function SecondInput(s) {
        setConfirmPassword(s.target.value)
    }



    

    return ( 
        <>
            <div className="container-fluid Registration_container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 registration_box">
                        <div className="Reg_title">Регистрация </div>
                        <form action="" className="Reg_form" onSubmit={Function_Password}>
                            <div className="reg_inputs">
                                <input type="email" placeholder="Почта"/>
                            </div>
                            <div className="reg_inputs">
                                <input type="text" placeholder="Имя"/>
                            </div>

                                <div className="reg_inputs">
                                    <input type="text"  placeholder="Пароль" id="Password" onChange={FirstInput}/>
                                    <i class="fa-regular fa-eye-slash"></i>
                                </div>
                                <div className="reg_inputs">
                                    <input type="text"  placeholder="Повторить пароль" id="confirmPassword" onChange={SecondInput}/>
                                    <i class="fa-regular fa-eye-slash"></i>
                                </div>


                                <input type="checkbox" id="check_input"/>
                                <label htmlFor="check_input" className="mx-2">Запомнить меня</label>
                                    
                                <p className="my-3 fs-6" id="message">{value}</p>
                                <button >Подтвердить</button>

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