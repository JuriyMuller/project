import React from 'react'
import "./resume.scss" 
import {BsGeoAlt as Loc, BsFillCalendarFill as Age, BsTelephone as Tel,BsFillEnvelopeFill as Mail,BsBriefcaseFill as Work,BsLinkedin as Linkedin,BsFileEarmarkPost as Courses,BsEmojiSunglassesFill as SoftSkills,BsFillFileEarmarkPersonFill as AboutMe} from "react-icons/bs"
import {FaTelegram as Telegram, FaDiscord as Dis,FaGraduationCap as Cap,FaGithub as GitHub } from"react-icons/fa"

export default function Portfolio() {
  return (
    <div className="container">
        <div className="wrapper row">
            <div className="section-main col-lg-4 ">
                <img className='section-main__img' src="https://sun9-8.userapi.com/s/v1/ig2/6DomWV7AXy62hiLqMmTn3gn_3ycLMrL68ZUYQbXK0Bizpr2JM97J4hPPzUF45kwRZ1ozHpiBC3nidpVrXf6FrORg.jpg?size=1018x1018&quality=96&type=album" alt="" />
                
                
                
                <span className="contacts">
                  <h2 className="contacts-title ">контакты</h2>
                
                <a href="tel:+996700787525" className="contacts-tel "> <span className="tel-icon"><Tel/></span>+996 (700) 787-525 <span className='telegram-icon'><Telegram/></span></a>
                <a href="mailto:nastya.semyonova.ss@gmail.com" className="contacts-email"><span><Mail/></span> nastya.semyonova.ss@gmail.com</a>
                <span className='contacts-discord'><span className='discord'><Dis/></span>да#7984</span><a href="https://github.com/JuriyMuller" className="contacts-github"><span className='gitHub'><GitHub/></span>GitHub Profile</a>
                <a href="https://www.linkedin.com/in/настя-семёнова-570a20237/" className="contacts-linkedin"><span className='linkedin'><Linkedin/></span>Linkedin Profile</a>
                

                </span>
                <span className="language">
                  <h2 className="language-title">языки</h2>
                  <span className="language-content">Английский - B1</span>
                </span>
                <span className="skills">
                  <h2 className="skills-title">Навыки</h2>
                  <ul className="skills-content">
                    <li>HTML5, CSS3, JS</li>
                    <li>SCSS</li>
                    <li>REACT</li>
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>ECMAScript (es6)</li>
                    <li>bootstrap</li>
                    <li>json</li>
                    <li>Адаптивная верстка</li>
                    <li>Кроссбраузерная верстка</li>
                    <li>Rest API</li>
                    <li>PhotoShop</li>
                    <li>skeleton</li>
                  </ul>
                </span>

            </div>
            <div className="section-info col-lg-8 ">
                <h1 className='section-info__title'>Семенова Анастасия Анатольевна</h1>
                <h2 className="section-info__subtitle">Frontend-developer</h2>
                <Loc/><address className="section-info__location">Кыргызстан, г.Бишкек</address><Age/>
                <span className="section-info__age">Возраст: 18 лет</span>
                <span className="experience">
                  <h3 className="experience-title"><span><Work/></span> Опыт Работы </h3>
                  <hr /><span className='experience-subtitle'>6 месяцев</span>
                  <span className='experience-subtitle'>Рекламный менеджер</span>
                  <span className='experience-responsibilities'>Должностные обязанности:</span>
                  <ul className='experience-content'>
                      <li className="experience-item">Провождение деловыч переговоров с клиентами компании</li>
                      <li className="experience-item">Осуществление активных поисков новых клиентов</li>
                      <li className="experience-item">Формирование отчетности</li>
                      <li className="experience-item">Осуществление оптовых продаж продукции компании</li>
                      <li className="experience-item">Занятие организационными вопросами</li>
                      <li className="experience-item">Работа со средствами массовой информации</li>
                      <li className="experience-item">Провождение презентации и заключал договора</li>
                      <li className="experience-item">Развитие базы постоянных клиентов</li>
                      <li className="experience-item">Работа с наружной рекламой</li>
                      <li className="experience-item">Подготавливка рекламных материалоВ</li>
                  </ul>
                </span>
                <span className="education">
                  <h2 className="education-title"><span><Cap/></span>Образование</h2>
                  <hr />
                  <span className="education-content row">
                    <time className="education-date col-lg-4">2018-2022</time>
                    <span className="education-txt col-lg-8"><b>Колледж КНУ им. Ж. Баласагына</b>:
                    Факультет Информационных технологий, <br />Направление: Программное обеспечение компьютерных сетей и автоматизированных систем
                    </span>
                  </span>
                </span>
                <span className="courses">
                <h2 className="courses-title"><span><Courses/></span>Курсы</h2>
                  <hr />
                  <span className="courses-content row">
                    <time className="courses-date col-lg-4">2021-2022</time>
                    <span className="courses-txt col-lg-8"><b>Jyldyz Academy</b>: <br />
                    Frontend-developer
                    </span>
                  </span>
                </span>
                <span className="soft-skills">
                <h2 className="soft-skills-title"><span><SoftSkills/></span>Soft Skills</h2>
                  <hr />
                  <ul className="soft-skills-content">
                      
                      <li className="soft-skills-item">Командная работа</li>
                      <li className="soft-skills-item">Поиск и анализ информации</li>
                      <li className="soft-skills-item">Нацеленность на результат</li>
                      <li className="soft-skills-item">Креативное мышление</li>
                      <li className="soft-skills-item">Логическое мышление</li>
                      <li className="soft-skills-item">Умение слушать</li>
                      <li className="soft-skills-item">Планирование</li>
                      <li className="soft-skills-item">Грамотная письменная и устная речь</li>
                      <li className="soft-skills-item">Умение видеть и решать проблему</li>
                      <li className="soft-skills-item">Ответственность</li>
                      <li className="soft-skills-item">Легко обучаемость</li>    
                      <li className="soft-skills-item">Тайм-менеджмент</li>
                  </ul>
                </span>
                <span className="about-me">
                <h2 className="about-me-title"><span>< AboutMe/></span>Soft Skills</h2>
                  <hr />
                  <p className="about-me-content">
                    Ответственная, легко обучаемая,оптимистичная, веселая. Исполняла обязанности на должности рекламного менеджера в компании СистемПрофи на протяжении полугода.
                    Любитель просмотра фильмов 
                  </p>
                </span>

                
            </div>
        </div>
    </div>
  )
}
