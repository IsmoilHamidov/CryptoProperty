import React, { useState } from "react";
import logoimage from '../images/nav_image.png'
import telegram from '../images/telegram.png';
import facebook from '../images/facebook_icon_130940 4.png';
import google from '../images/google.png';
import discord from '../images/discord_icon_130958 1.png';
import account_img1 from '../images/program img1.png'
import account_img2 from '../images/program img2.png'
import UserImg from '../images/Setting_img1.png'
import moneyicon1 from '../images/balance img1.png'
import moneyicon2 from '../images/balance img2.png'
import moneyicon3 from '../images/balance img3.png'
import moneyicon4 from '../images/balance img4.png'
import Recharts from "./Rechart";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






function Main() {   

    const [toggle, setToggle] = useState(1)


    function updateToggle(id) {
        setToggle(id)
    }

    // modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ---


    const [password, setPassword] = useState('')
    const [value, setValue] = useState('')


    function Privacy(s) {
        s.preventDefault()
        let regx = /^[a-zA-Z0-9]{4,8}$/gm


        if(regx.test(password)){
            setValue('Success')
        }else{
            setValue('Error! please include according to this [a-zA-Z0-9]{4,8}')
        }
    }

    function InputPrivacy(event){
        setPassword(event.target.value)
    }





    return ( 
        <div className="Main_container">
            <div className="left_side">
                <div className="imageLogo">
                    <img src={logoimage} alt="" style={{width:"74px", height:"74px"}} />
                </div>

                <a href="#" style={{textDecoration:"none"}}>
                    <button className="spans_icons" onClick={()=>updateToggle(1)}  id="balance_press">
                        <i class="fa-solid fa-dollar" style={{padding:"5px 10px"}}></i>
                        Баланс
                    </button>
                </a>

                <a href="#" style={{textDecoration:"none"}}>
                    <button className="spans_icons" onClick={()=>updateToggle(2)}>
                         <i class="fa-solid fa-chart-simple"></i>
                        Торговая панель
                    </button>
                </a>

                <a href="#" style={{textDecoration:"none"}}>
                    <button className="spans_icons" onClick={()=>updateToggle(3)}>
                        <i class="fa-solid fa-gear"></i>    
                         Настройки
                    </button>
                </a>

                <a href="#" style={{textDecoration:"none"}}>
                    <button className="spans_icons" onClick={()=>updateToggle(4)}>
                        <i class="fa-regular fa-handshake"></i>   
                        Партнерская программа
                    </button>
                </a>
               


                <a href="#" className="main_logos">
                    <img src={telegram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={google} alt="" />
                    <img src={discord} alt="" />
                </a>


                <div className="Vixod">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <a href="#" style={{marginLeft:"10px", textDecoration:"none"}}>Выход</a>
                </div>
            </div>





        {/* Balanse */}
            <div className="right_side">

                <div className={toggle === 1 ? "show-content" :"content"}>
                    <div className="Programma_container " >

                        <div className="FullName_box">
                                <img src={UserImg} alt="" />
                                <p>Имя Фамилия</p>
                        </div>

                    <div className="Balance_holder">
                            <div className="Main_balance">
                                <p className="balance_text"> Баланс fiat Coin:</p>
                                <h2>1280</h2>


                                <a className="money_box" data-bs-toggle="modal" data-bs-target="#modalBalance2">
                                    <div className="money_icon">
                                        <img src={moneyicon1} alt="" />
                                    </div>
                                    <p className="m-0">Пополнить баланс</p>
                                </a>

                                <a className="money_box money_box2" data-bs-toggle="modal" data-bs-target="#modalBalance1">
                                    <div className="money_icon">
                                        <img src={moneyicon2} alt="" />
                                    </div>
                                    <p className="m-0">Перевод в доллары</p>
                                </a>
                

                                <div className="right_cash" >
                                    <img src={account_img2} alt="" />
                                    <i class="fa-solid fa-right-left"></i>
                                    <p>1220$</p>
                                </div>
                                
                            </div>


                            <div className="Main_balance Main_balance2">
                                <p className="balance_text"> Доступный баланс для вывода :</p>
                                <h2>550 $</h2>


                                <a className="money_box" data-bs-toggle="modal" data-bs-target="#modalBalance1">
                                    <div className="money_icon">
                                        <img src={moneyicon4} alt="" />
                                    </div>
                                    <p className="m-0">Пополнить баланс</p>
                                </a>

                                <a className="money_box money_box2" data-bs-toggle="modal" data-bs-target="#modalBalance2">
                                    <div className="money_icon">
                                        <img src={moneyicon3} alt="" />
                                    </div>
                                    <p className="m-0"> Вывод средств</p>
                                </a>
                    </div>


                            {/* <!-- Modal Balance --> */}

                            <div class="modal fade" id="modalBalance1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header modalHeader">
                                        <h5 class="modal-title" id="exampleModalLabel">Ha какую сумму вы хотите пополнить</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <div className="Modal_box1">
                                                <button>100F</button>
                                            </div>
                                            <div className="Modal_box2">
                                                <button>Да</button>
                                                <button data-bs-dismiss="modal" >Нет</button>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>


                            <div class="modal fade" id="modalBalance2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header modalHeader">
                                        <h5 class="modal-title" id="exampleModalLabel">какую сумму вы хотите пополнить</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <div className="Modal_box1">
                                                <button>500F</button>
                                            </div>
                                            <div className="Modal_box2">
                                                <button>Да</button>
                                                <button data-bs-dismiss="modal" >Нет</button>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        {/* ----------- */}

                        </div>


                        <div className="Balance_History_box">
                            <p className="m-0 History_title">История транзакций</p>
                            <form className="select_box">

                                <div className="select_child">
                                    <select>
                                        <option value="volvo">По сумме</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                
                                <div className="select_child">
                                    <select>
                                        <option value="volvo">По дате</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </form>


                            <div className="History_Folder">

                                <div className="history_information">
                                        <div className="H_info_left">
                                            <div className="F_box">
                                                <p className="m-0">F</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств</p>
                                            </div>         
                                        </div>
                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="history_information">
                                        <div className="H_info_left ">
                                            <div className="F_box " style={{backgroundColor:"#4D70B5"}}>
                                                <p className="m-0">$</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств  <span className="F_number_span" style={{color:"gray", }}>на карту карту 5356***</span></p>
                                            </div>         
                                        </div>

                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="history_information">
                                        <div className="H_info_left">
                                            <div className="F_box">
                                                <p className="m-0">F</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств</p>
                                            </div>         
                                        </div>
                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="history_information">
                                        <div className="H_info_left">
                                            <div className="F_box " style={{backgroundColor:"#4D70B5"}}>
                                                <p className="m-0">$</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств  <span className="F_number_span" style={{color:"gray"}}>на карту карту 5356***</span></p>
                                            </div>         
                                        </div>
                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>

                                <div className="history_information">
                                        <div className="H_info_left">
                                            <div className="F_box">
                                                <p className="m-0">F</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств</p>
                                            </div>         
                                        </div>
                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>


                                  <div className="history_information">
                                        <div className="H_info_left">
                                            <div className="F_box " style={{backgroundColor:"#4D70B5"}}>
                                                <p className="m-0">$</p>
                                            </div>
                                            <div className="F_number">
                                                <p className="m-1 f_Box_bold">- 3000 F</p>
                                                <p >Перевод средств  <span className="F_number_span" style={{color:"gray",}}>на карту карту 5356***</span></p>
                                            </div>         
                                        </div>

                                        <div className="H_info_right">
                                            <div className="right1">
                                                <p className="m-0">Остаток на счету :</p>
                                                <p className="m-0">Дата :</p>
                                            </div>
                                            <div className="right2">
                                                <p>1000 F</p>
                                                <p>21.05.2021</p>
                                            </div>
                                        </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
  


            {/* Torgovaya Panel */}
                <div className={toggle === 2 ? "show-content" :"content"}>
                    <div className="Programma_container">
                        <div className="Cash_box">
                            <span>Баланс :</span>
                            <div className="Cash_Number">
                                <p>100,000 F </p>
                                <p>100,000 $</p>
                            </div>
                        </div>

                        <div className="Buying_box">
                            <button type="button" class="Hover_effected" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <p className="m-0">Купить</p>
                            </button>
                            <button type="button" class="Hover_effected" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <p className="m-0">Продать</p>
                            </button>
                        </div>



                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header modalHeader">
                                    <h5 class="modal-title" id="exampleModalLabel">Вы уверенны что хотите купить?</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                        <div className="Modal_box1">
                                            <button>100F</button>
                                        </div>
                                        <div className="Modal_box2">
                                            <button>Да</button>
                                            <button data-bs-dismiss="modal" >Нет</button>
                                        </div>
                                </div>
                                </div>
                            </div>
                            </div>


                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header modalHeader">
                                    <h5 class="modal-title" id="exampleModalLabel">Вы уверенны что хотите продать?</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="Modal_box1">
                                        <button style={{width:"95%", height:"60px"}}>Продажа будет доступна после</button>
                                        <button style={{width:"55%", backgroundColor:"#A790C6", color:"white"}}>43:45:30:43</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        {/* -------- */}


                        <div className="Chart_box">
                            <div className="recharts">
                                <Recharts/>
                            </div>
                        </div>

                    </div>
                </div>




            {/* Settings */}
                <div className={toggle === 3 ? "show-content" :"content"}>
                    <div className="Programma_container">
                        <div className="FullName_box">
                            <img src={UserImg} alt="" />
                            <p>Имя Фамилия</p>
                        </div>

                        <form className="changeName_box">
                            <label htmlFor="nameID">Изменить имя</label>
                            <input type="text" placeholder="Имя Фамилия" id="nameID"/>
                            <button className="Hover_effected">Подтвердить</button>
                        </form>

                        <form className="AccountEmail_box changeName_box">
                            <label htmlFor="nameID">Привязать аккаунт к другой почте</label>
                            <input type="email" placeholder="Почта" id="nameID"/>
                            <button className="Hover_effected">Подтвердить</button>
                        </form>
                        

                        <form className="changePassword_box" onSubmit={Privacy}>
                            <p>Изменить пароль</p>

                            <div className="inputIcons"> 
                                <input type="text" placeholder="Пароль" onChange={InputPrivacy}/>
                                <i class="fa-regular fa-eye-slash"></i>
                                {/* <i class="fa-regular fa-eye"></i> */}
                            </div>
        
                                        
                            <div className="inputIcons"> 
                                <input type="password" placeholder="Повторить пароль" onChange={InputPrivacy}/>
                                <i class="fa-regular fa-eye-slash"></i>
                              
                                {/* <i class="fa-regular fa-eye"></i> */}
                            </div>
                            <span style={{fontSize:"16px"}}>{value}</span>

                            <button className="Hover_effected">Подтвердить</button>

                        </form>
                    </div>
                </div>





                
                {/*Program */}
                <div className={toggle === 4 ? "show-content" :"content"}>
                    <div className="Programma_container">
                        <div className="Account_box">
                                <p>Заработано на реферальной программе:</p>
                                <div className="Account_child">
                                    <div className="A_child1">
                                        <img src={account_img1} alt="" />
                                        <p>перейти к счету</p>
                                    </div>
                                    <div className="A_child2">
                                        <spa >550</spa>
                                        <img src={account_img2} alt="" />
                                    </div>
                                </div>
                        </div>
                        
                        <div className="Link_box">
                            <h2>Ваша реферальная ссылка</h2> 
                            <div className="link_copy">
                                <a href="https://www.russianpromo.ru/wiki/referalnaya-ssylka/">https://www.russianpromo.ru/wiki/referalnaya-ssylka/</a>
                            </div>
                            <p>Скопируйте ссылку и отправьте друзьям, за каждую ссылку вы получите <strong>20 F</strong></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Main;