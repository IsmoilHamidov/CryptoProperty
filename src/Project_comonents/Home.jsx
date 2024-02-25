import React from "react";
import first_right_img from "../images/Home img1.png"
import third_top_img1 from "../images/home_third_img1.png"
import third_top_img2 from "../images/third_top_img2.png"
import third_top_img3 from "../images/thid_top_img3.png"
import third_top_img4 from "../images/thid_top_img4.png"
import third_top_img5 from "../images/thid_top_img5.png"
import third_top_img6 from "../images/thid_top_img6.png"
import third_bottom_right from "../images/third_bottom_right.png"
import fourth_child_img1 from "../images/fourth_child_img1.png"
import fourth_child_img2 from "../images/fourth_child_img2.png"
import fourth_child_img3 from "../images/fourth_child_img3.png"
import fourth_child_img4 from "../images/fourth_child_img4.png"
import fifth_page_img from "../images/fifth_page_img.webp"
import sixth_img1 from "../images/sixth_img1.png"
import sixth_img1_5 from "../images/sixth_img1.5.png"
import sixth_img2 from "../images/sixth_img2.png"
import sixth_img3 from "../images/sixth_img3.png"
import sixth_img4 from "../images/sixth_img4.png"
import sixth_img5 from "../images/sixth_img5.png"
import sixth_line from "../images/sixth_line.png"
import sixth_link from "../images/sixth_link.png"
import Registration from "./Registration";
import { Link } from "react-router-dom";




function Home() {


    return ( 
        <>
            <div className="Home_container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 first_left">
                                <h3>Ваш надежный криптовалютный серсис недвижимости</h3>
                                <p>С помощью нашего сервиса Вы с легкостью сможете инвестировать с свое будущее</p>
                                <form action="" className="first_left_form">
                                    <button><Link to={"/Registration"}></Link>Регистрация</button>
                                    <button>Вход</button>
                                </form>    
                        </div>
                        <div className="col-sm-12 col-lg-6 first_right">
                            <img src={first_right_img} alt="" />
                        </div>
                    </div>    
                </div>
            </div>






                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 first_left">
                        <h3>Текущая ставка токена <br></br>(Binance)</h3>
                                <div action="" className="first_left_form ">
                                        <div className="Capital_F">
                                            <p>F</p>
                                        </div>
                                        <div className="Fiat">
                                            <p>Fiat = 0,067 </p>
                                            <p>+211%</p>
                                        </div>
                                </div>    
                        </div>
                        <div className="col-sm-12 col-lg-6 first_right">
                            <div className="Realniy_token">
                               <h3>Реальный токен </h3> 
                               <p>Токен это единица учёта, не являющаяся криптовалютой, предназначенная для представления цифрового баланса в некотором активе, иными словами выполняющая функцию «заменителя ценных бумаг» в цифровом мире. </p>
                               <button className="Hover_effected">
                                    <i class="fa-solid fa-chart-simple mx-2"></i>
                                    <span>Торговать на бирже</span>
                               </button>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="Next_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-10  third_top">
                                    <div className="third_top_children">
                                        <p>Регистрация</p>
                                            <div>
                                                <img src={third_top_img1} alt="" className="third_top_img1"/>
                                                <img src={third_top_img2} alt="" className="third_top_img2"/>
                                            </div>
                                        <h5> Шаг 1</h5>
                                    </div>
                                    <div className="third_top_children">
                                        <p>Пополнение счета</p>
                                            <div>
                                                <img src={third_top_img1} alt="" className="third_top_img1"/>
                                                <img src={third_top_img3} alt="" className="third_top_img2"/>
                                            </div>
                                        <h5> Шаг 2</h5>
                                    </div>
                                    <div className="third_top_children">
                                        <p>Отслеживание по графику</p>
                                            <div>
                                                <img src={third_top_img1} alt="" className="third_top_img1"/>
                                                <img src={third_top_img4} alt="" className="third_top_img2"/>
                                            </div>
                                        <h5> Шаг 3</h5>
                                    </div>
                                    <div className="third_top_children">
                                        <p>Продажа монет</p>
                                            <div>
                                                <img src={third_top_img1} alt="" className="third_top_img1"/>
                                                <img src={third_top_img5} alt="" className="third_top_img2"/>
                                            </div>
                                        <h5> Шаг 4</h5>
                                    </div>
                                    <div className="third_top_children">
                                        <p>Вывод прибыли</p>
                                            <div>
                                                <img src={third_top_img1} alt="" className="third_top_img1"/>
                                                <img src={third_top_img6} alt="" className="third_top_img2"/>
                                            </div>
                                        <h5> Шаг 5</h5>
                                    </div>
                            </div>
                            <div className="col-12 third_bottom" name="About_us">
                                    <h2>О нас</h2>
                                <div className="third_bottom_child ">
                                    <div className="third_bottom_left">
                                        <h4>Начните свое путешествие в мире криптовалюты с надежным партнером</h4>
                                        <p>Cat.Ex, созданная в августе 2018 года, является одной из крупнейших бирж криптовалют в мире. Наша штаб-квартира находится в Шэньчжэне, Китай. У нас есть глобальные сообщества в Южной Корее, Китае, Бангладеш, России, Турции, на Ближнем Востоке, в Индии, Индонезии и США. Мы используем процесс, называемый майнингом транзакций, чтобы пользователи могли получать дивиденды с нашей платформы распределения прибыли.</p>
                                    </div>
                                    
                                    <div className="third_bottom_right ">
                                        <img src={third_bottom_right} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="fourth_container col-12">
                               <h2>Преимущества использования нашего сервиса</h2>
                                <div className="fourth_children">
                                    <div className="fourth_children_data">
                                        <img src={fourth_child_img1} alt="" />
                                        <p>100% Надежность и контроль безопасности кошелька, защищены операционные системы, серверы приложений.</p>
                                    </div>
                                    <div className="fourth_children_data">
                                        <img src={fourth_child_img2} alt="" />
                                        <p>Не нужно заполнять никаких лишних данных и документов платить налоги, все только с участием нашего севиса и Вас.</p>
                                    </div>
                                </div>

                                <div className="fourth_children">
                                    <div className="fourth_children_data">
                                        <img src={fourth_child_img3} alt="" />
                                        <p>Что то про то какие у нас выгодные вложения, удачные инвестиции, увеличение прибыли, хороший как и был ожидаем результат </p>
                                    </div>
                                    <div className="fourth_children_data">
                                        <img src={fourth_child_img4} alt="" />
                                        <p>Что то про то какие у нас выгодные вложения, удачные инвестиции, увеличение прибыли, хороший как и был ожидаем результат </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="Fifth_container col-12">
                                <h2>Наша миссия</h2>
                                <p>Как можно быстрее увеличить ваш доход, при <br></br>каждом вкладе ваш размер недвижимости будет расти.</p>
                                <img src={fifth_page_img} alt="" />
                                <p className="position_Text">Cat.Ex, созданная в августе 2018 года, является одной из крупнейших бирж криптовалют в мире. Наша штаб-квартира находится в Шэньчжэне, Китай. У нас есть глобальные сообщества в Южной Корее, Китае, Бангладеш, России, Турции, на Ближнем Востоке, в Индии, Индонезии и США. Мы используем процесс, называемый майнингом транзакций, чтобы пользователи могли получать дивиденды с нашей платформы распределения прибыли.</p>
                            </div>
                        </div>
                    </div>

                    <div className="conatainer">
                        <div className="row">
                            <div className="sixth_container">
                                <div className="Column1">
                                    <img src={sixth_img1} className="buildings" alt="" />
                                    <p>5</p>
                                    <img src={sixth_line} alt="" className="sixth_line"/>
                                    <p>Вывод прибыли</p>
                                    <img src={sixth_img5} className="buildings changedBuild1" alt="" />
                                    <p>1</p>
                                    <img src={sixth_line} alt="" className="sixth_line" />
                                    <p>регистрация</p>
                                    <img src={sixth_img1_5} alt="" className="sixth_img1_5" />
                                </div>
                                <div className="Column2 ">
                                    <img src={sixth_img2} alt="" className="buildings"/>
                                    <p>4</p>
                                    <img src={sixth_line} alt="" className="sixth_line" />
                                    <p>Продажа монет</p>
                                    <img src={sixth_img4} alt="" className="buildings changedBuild2"/>
                                    <p>2</p>
                                    <img src={sixth_line} alt="" className="sixth_line" />
                                    <p>Пополнение счета</p>
                                </div>
                                <div className="Column3">
                                    <img src={sixth_img3} alt="" className="buildings" />
                                    <p>3</p>
                                    <img src={sixth_line} alt="" className="sixth_line" />
                                    <p>Отслеживание по графику</p>
                                </div>
                                <img src={sixth_link} alt="" className="sixth_link"/>
                            </div>
                        </div>
                    </div>
            </div>
        
        </>
     );
}

export default Home;