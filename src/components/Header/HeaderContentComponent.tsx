import "../../styles/HeaderComponent/HeaderContentComponent.scss";
import { BurgerComponent } from "./BurgerComponent";



const HeaderContentComponent = (): JSX.Element => {
    return (
        <div className="header__content">
            <div className="menu__wrapper">
                <BurgerComponent />
                <ul className="navigation">
                    <li className="menu__item"><a href="" className="menu_link">О компании</a></li>
                    <li className="menu__item"><a href="" className="menu_link">Инвестору</a></li>
                    <li className="menu__item"><a href="" className="menu_link">Новости</a></li>
                    <li className="menu__item"><a href="" className="menu_link">Отзывы</a></li>
                    <li className="menu__item"><a href="" className="menu_link">F.A.Q</a></li>
                    <li className="menu__item"><a href="" className="menu_link">Контакты</a></li>
                </ul>
                <a href="" className="login__button">
                    Вход/Регистрация
                </a>
            </div>
            <div className="header__main-content">
                <div className="content__wrapper">
                    <div className="text__content">
                        <h2 className="header__h2">Сегодня рынок<br /> IT-технологий измеряется<br /> уже триллионами долларов</h2>
                        <p className="header__description">
                            Мы знаем как заработать свою долю прибыли.<br />
                            Регистрируйтесь на нашей платформе и начинайте <br /> зарабатывать с нами
                        </p>
                        <a href="" className="header__content-button">
                            <span>Калькулятор прибыли</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderContentComponent;