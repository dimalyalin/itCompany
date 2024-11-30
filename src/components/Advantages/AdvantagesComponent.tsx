import "../../styles/Advantages/AdvantagesComponent.scss";
import "../../styles/Advantages/Media.scss";
import Adv1Image from "../../img/adv1.svg";
import Adv2Image from "../../img/adv2.svg";
import Adv3Image from "../../img/adv3.svg";
import Adv4Image from "../../img/adv4.svg";

export const AdvantagesComponent = (): JSX.Element => {
    return (
        <div className="advantages__wrapper">
            <div className="advantages__top">
                <p className="advantages__question bottom__title">Почему именно мы?</p>
                <h2 className="advantages__title content__title">Преимущества работы с нами</h2>
            </div>
            <div className="advantages__bottom">
                <div className="adv adv1">
                    <img src={Adv1Image} alt="Стабильный доход" />
                    <div className="adv__text-content">
                        <h2 className="adv__title">Стабильный доход – 1.2% в день</h2>
                        <p className="adv__description">
                            Возможность получения стабильной доходности,<br/> превышающей процентную ставку по банковским<br/> депозитам
                        </p>
                    </div>

                </div>
                <div className="adv adv2">
                    <img src={Adv2Image} alt="Стабильный доход" />
                    <div className="adv__text-content">
                        <h2 className="adv__title">Устойчивость «Open Invest System»</h2>
                        <p className="adv__description">
                            Эффективность инвестиционных стратегий и защита ваших<br/> денежных средств подтверждается многолетним опытом<br/> работы профессиональной команды инвесторов
                        </p>
                    </div>
                </div>
                <div className="adv adv3">
                    <img src={Adv3Image} alt="Стабильный доход" />
                    <div className="adv__text-content">
                        <h2 className="adv__title">Быстрый вывод средств</h2>
                        <p className="adv__description">
                            Мы знаем как важно иметь доступ к своим личным<br/> средствам, поэтому автоматизировали процесс вывода<br/> дивидендов до 24-х часов
                        </p>
                    </div>
                </div>
                <div className="adv adv4">
                    <img src={Adv4Image} alt="Стабильный доход" />
                    <div className="adv__text-content">
                        <h2 className="adv__title">Минимальная инвестиция - 100р.</h2>
                        <p className="adv__description">
                            Вы сами определяете свои инвестиционные цели. Начните<br/> с небольшой суммы, основные депозитные предложения<br/> доступны от 100 руб.
                        </p>
                    </div>
                </div>
            </div>
            <div className="advantages__controls">
                <a className="registration__button controls__regButton" href="">Регистрация</a>
                <a className="controls__calcButton" href="">Калькулятор прибыли</a>
            </div>
        </div>
    );
}