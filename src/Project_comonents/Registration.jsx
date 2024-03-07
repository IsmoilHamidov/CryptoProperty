import React, { useState } from "react";
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import Reg_Validation from "./Reg_Validation"


function Registration() {

   
    const [values, setValues] = useState({
            email: '',
            Fullname:'',
            password: '',
            confirm_password: '' 
        })

    const [errors, setErrors] = useState({})


    const HandleInput = (e) => {
        setValues({...values, [e.target.name]: [e.target.value]})
    }


    function HandleFunction(e) {
        e.preventDefault()
        setErrors(Reg_Validation(values))
    }
 


    return ( 
        <>
            <div className="container-fluid Registration_container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 registration_box">
                        <div className="Reg_title">Регистрация </div>
                        <form action="" className="Reg_form" onSubmit={HandleFunction}>
                                <div className="reg_inputs">
                                <input type="email" name="email" 
                                        placeholder="Почта" onChange={HandleInput}/>
                                </div> 
                                    {errors.email && <p style={{color: "red"}} className="my-1">{errors.email} </p>}

                                <div className="reg_inputs">
                                    <input type="text" placeholder="Имя" name="Fullname" onChange={HandleInput}/>
                                </div>
                                    {errors.Fullname && <p style={{color: "red"}} className="my-1">{errors.Fullname}</p>}

                                <div className="reg_inputs">
                                    <input type="password"  placeholder="Пароль" name="password" id="Password" onChange={HandleInput}/>
                                    <i class="fa-regular fa-eye-slash"></i>
                                </div>
                                    {errors.password && <p style={{color: "red"}} className="my-1">{errors.password}</p>}

                                <div className="reg_inputs">
                                    <input type="password"  placeholder="Повторить пароль" name="confirm_password" id="confirmPassword" onChange={HandleInput}/>
                                    <i class="fa-regular fa-eye-slash"></i>
                                </div>
                                     {errors.confirm_password && <p style={{color: "red"}} className="my-1">{errors.confirm_password}</p>}


                                <input type="checkbox" id="check_input"/>
                                <label htmlFor="check_input" className="mx-2">Запомнить меня</label>
                                    
                                {/* <p className="my-3 fs-6" id="message">{value}</p> */}
                                <button type="submit">Подтвердить</button>

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