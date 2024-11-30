import "../../styles/Footer/Footer.scss";
import "../../styles/Footer/Media.scss";


export const Footer = (): JSX.Element => {


    return (
        <div className="footer__wrapper">
            <div className="footer__content">
                <div className="aboutCompany">
                    <span>
                        Команда, у которой за плечами 
                        <br/>не менее 12 лет работы
                        <br/>на разных позициях в сегменте инвестиционного бизнеса – 
                        от аудитора и аналитика отдела рисков до финансового директора инвестиционного банка.
                    </span>
                </div>


                <div className="contactInfo">
                    <div className="navigationContent">
                        <h2 className="contactInfo__title">Навигация</h2>
                        <div className="navigationList__wrapper">
                            <ul>
                                <li className="navigationList__item"><a href="#">Главная</a></li>
                                <li className="navigationList__item"><a href="">О Компании</a></li>
                                <li className="navigationList__item"><a href="">Отзывы о компании</a></li>
                                <li className="navigationList__item"><a href="">Как мы зарабатываем?</a></li>
                                <li className="navigationList__item"><a href="">Клиентское соглашение</a></li>
                            </ul>

                            <ul>
                                <li className="navigationList__item"><a href="">Документы компании</a></li>
                                <li className="navigationList__item"><a href="">Новости</a></li>
                                <li className="navigationList__item"><a href="">F.A.Q.</a></li>
                                <li className="navigationList__item"><a href="">Контакты</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contactsContent">
                        <h2 className="contactInfo__title">Контакты</h2>
                        <ul>
                            <li className="navigationList__item">+7 (499)-229-33-33</li>
                            <li className="navigationList__item">info@ftc.vin</li>
                            <li className="navigationList__item">ПН - ПТ: 10:00 - 20:00 по МСК</li>
                            <li className="navigationList__item">СБ - ВС: свободный график</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}