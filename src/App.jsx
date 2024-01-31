import Dropdown from './components/dropdown/Dropdown.jsx'
import './App.sass'
import TalkCard from "./components/talk-card/TalkCard";
import Title from "./components/title/Title.jsx";
import {useState} from "react";

function App() {
    const [formData, setFormData] = useState({});
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTextarea, setInputTextarea] = useState('');

    const formSend = (event) => {
        event.preventDefault()

        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            console.log('xhr all', xhr)

            if(xhr.status === 201) {
                setInputName('');
                setInputPhone('');
                setInputEmail('');
                setInputTextarea('')
            }

            if(xhr.status === 400) {
                //TODO: вывод ошибки, либо состояние ошибки контролить
            }
        };

        xhr.open("POST", "http://localhost/request/api/request/create.php", false);
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.send(JSON.stringify(formData));
    }

    const handleInputChange = event => {
        const {name, value} = event.target;

        if(name === 'user_name') {
            const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, '');
            setInputName(filteredValue)
        }

        if(name === 'phone') {
            let formattedInput = value.replace(/\D/g, '')
            setInputPhone(formattedInput);
        }

        if(name === 'email') {
            setInputEmail(value);
        }

        if(name === 'textarea') {
            setInputTextarea(value);
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className='header-container top'>
                        <div className="header__top-logo">
                            <span>Vest</span>
                        </div>
                        <div className="header__top-link">
                            <a href={'#info'}>Обо мне</a>
                            <a href={'#price'}>Стоимость</a>
                            <a href={'#contact'}>Контакты</a>
                            <a href={'#sign'}>Записаться</a>
                        </div>
                    </div>
                </div>
                <div className='header-container'>
                    <div className="header__bottom">
                        <div className="header__bottom-info">
                            <h1>Ваш личный психолог</h1>
                            <p>
                                Консультирую взрослых, подростков и пары с 2006 года. Успешно помогаю клиентам
                                справляться
                                со сложностями в отношениях, стрессом, тревожностью, депрессией и другими проблемами. С
                                подробным списком возможных тем для консультаций можно ознакомиться <a
                                href={'/'}>здесь</a>.
                                В работе чаще
                                всего использую техники гештальт‑подхода.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <main className="content">
                <section className="content__talk">
                    <div>
                        <Title title={'О чем со мной можно поговорить?'}/>
                        <div className="content__talk-cards">
                            <TalkCard src={"../../src/assets/icon/icon-couple-96.png"} alt={"отношения"}
                                      description="Трудности в построении отношений"/>
                            <TalkCard src={"../../src/assets/icon/icon-job-96.png"} alt={"работа"} description="Сложности на работе"/>
                            <TalkCard src={"../../src/assets/icon/icon-anxiety-96.png"} alt={"страх"} description="Тревожность, страх, паника"/>
                            <TalkCard src={"../../src/assets/icon/icon-depression-96.png"} alt={"депресия"} description="Депрессивные состояния"/>
                            <TalkCard src={"../../src/assets/icon/icon-divorce-96.png"} alt={"расставание"} description="Развод и расставание"/>
                            <TalkCard src={"../../src/assets/icon/icon-family-96.png"} alt={"семья"} description="Семейные проблемы"/>
                            <TalkCard src={"../../src/assets/icon/icon-confusion-96.png"} alt={"профессия"}
                                      description="Поиск себя, выбор профессии"/>
                            <TalkCard src={"../../src/assets/icon/icon-tree-96.png"} alt={"развитие"}
                                      description="Личностный рост и развитие"/>
                        </div>
                    </div>
                </section>
                <section id="info" className="content__info">
                    <div>
                        <Title title={'Обо мне'}/>
                        <Dropdown title='Чем я могу помочь?' description={
                            <p>Если ваше внутреннее равновесие пошатнулось, готова предложить помощь. Вы можете
                                обратиться для обсуждения небольшого вопроса или долгосрочной работы.
                                Оказываю поддержку в самых разных ситуациях — при трудностях в отношениях, принятии
                                важных решений и многих других.
                            </p>}
                        />
                        <Dropdown title='Образование' description={
                            <div>
                                <p>
                                    1999–2006 — <span>Новосибирский Государственный Университет</span>, Факультет
                                    психологии.
                                    Специализация: «<span>Клиническая психология</span>». Квалификация: психолог,
                                    преподаватель
                                    психологии.
                                </p>

                                <span>
                            Курсы повышения квалификации:
                        </span>

                                <p>
                                    2003 — <a href={'https://migip.ru/'} target={'_blank'}>Московский Институт Гештальта
                                    и
                                    психодрамы</a> «Введение в гештальт-терапию/
                                    гештальт-консультирование. Контакт с собой и другими.» — 100 часов.
                                </p>
                                <p>
                                    2003–2006 — Московский Институт Гештальта и психодрамы «Гештальт-терапия/
                                    Гештальт-консультирование» — 965 часов.
                                </p>

                                <span>
                            Участник мероприятий:
                        </span>

                                <ul>
                                    <li>
                                        <p>
                                            Семинары и обучающие программы
                                        </p>
                                    </li>

                                    <li>
                                        <p>
                                            Центра Психологии НГУ,
                                        </p>
                                    </li>

                                    <li>
                                        <p>
                                            Московского Института Гештальта и психодрамы,
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Института клинической психологии,
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Института практической психологии «Иматон» (г. Санкт-Петербург).
                                        </p>
                                    </li>
                                </ul>
                            </div>}
                        />
                        <Dropdown title='Почему я?' description={
                            <ul>
                                <li>
                                    <p>
                                        разговариваю с клиентами на простом человеческом языке, не использую сложные
                                        термины
                                        и
                                        профессиональный жаргон;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        придерживаюсь в работе научного подхода;
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        регулярно читаю психологическую литературу, в том числе на иностранных языках, и
                                        могу
                                        предложить клиентам самые современные и эффективные методы диагностики и
                                        консультирования.
                                    </p>
                                </li>
                            </ul>
                        }/>
                    </div>
                </section>
                <section id="price" className="content__price">
                    <Title title={'Стоимость консультаций'}/>
                    <div className={'content__price-cards'}>
                        <TalkCard src={"../../src/assets/icon/question-72x72.png"} alt={"развитие"} description={
                            <>
                                <p>Предварительная консультация</p>
                                <p className={'price__cost'}>Бесплатно</p>
                                <p className={'price__time'}>15 минут <br/> Проводится по телефону</p>
                            </>}
                            classCard={'price'}
                        />
                        <TalkCard src={"../../src/assets/icon/counselor-1-72x72.png"} alt={"развитие"} description={
                            <>
                                <p>Индивидуальная консультация</p>
                                <p className={'price__cost'}>2500</p>
                                <p className={'price__time'}>60 минут <br/> Узнать больше</p>
                            </>}
                                  classCard={'price'}
                        />
                        <TalkCard src={"../../src/assets/icon/icon-couple-96.png"} alt={"развитие"} description={
                            <>
                                <p>Семейная консультация</p>
                                <p className={'price__cost'}>3600</p>
                                <p className={'price__time'}>90 минут <br/> Узнать больше</p>
                            </>}
                                  classCard={'price'}
                        />
                        <TalkCard src={"../../src/assets/icon/profession-72x72.png"} alt={"развитие"} description={
                            <>
                                <p>Профориентация</p>
                                <p className={'price__cost'}>5000</p>
                                <p className={'price__time'}>120 минут <br/> Узнать больше</p>
                            </>}
                                  classCard={'price'}
                        />
                    </div>
                </section>
                <section id="contact" className="content__contact">
                    <div>
                        <Title title={'Контакты'}/>
                        <div className="content__contact-cards">
                            <div>
                                <span>Email</span>
                                <a href={'mailto:test@gmail.com'}>test@gmail.com</a>
                            </div>
                            <div>
                                <span>Телефон</span>
                                <span><a href={'tel:+79103803634'}>+79103803634</a> (WhatsApp, Telegram)</span>
                            </div>
                            <div>
                                <span>Адрес</span>
                                <span>Ул. Лаврентьева 3, Новосибирск</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sign" className="content__sign">
                    <div>
                        <Title title={'Записаться на прием'}/>
                        <div className='content__sign-form'>
                            <form onSubmit={formSend}>
                                <div>
                                    <label>Имя</label>
                                    <input name='user_name' type={'text'} value={inputName}
                                           placeholder={'Введите Ваше имя'} required={true}
                                           onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Почта</label>
                                    <input name='email' type={'email'} value={inputEmail}
                                           placeholder={'Введите Ваш email'} required={true}
                                           onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Телефон</label>
                                    <input name='phone' type={'tel'} value={inputPhone}
                                           minLength={11} maxLength={11}
                                           placeholder={'+7 (XXX) XXX XXXX'} required={true}
                                           onChange={handleInputChange}/>
                                </div>
                                <div>
                                    <label>Вопрос или сообщение</label>
                                    <textarea name='textarea' value={inputTextarea}
                                              placeholder={'Опишите удобное время, день'}
                                              onChange={handleInputChange}></textarea>
                                </div>
                                <button type={'submit'}>Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>Copyright 2024</p>
            </footer>
        </>
    )
}

export default App
