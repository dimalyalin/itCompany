import "../../styles/Banner/TextBlock.scss";
import Step1 from "../../img/Step1.svg";
import Step2 from "../../img/Step2.svg";
import Step3 from "../../img/Step3.svg";

export const TextBlockComponent = (): JSX.Element => {
    return (
        <div className="textBlock">
            <div className="textBlock__header">
                <h2 className="content__title textBlock__title">Инвестировать<br/> с нами надежно<br/> и выгодно</h2>
                <a href="" className="registration__button textBlock__button">Начать зарабатывать</a>
            </div>
            <div className="textBlock__roadmap">
                <div className="roadmap__item">
                    <div className="roadmap__step">
                        <img className="stepImage" src={Step1} alt="Шаг первый" />
                    </div>
                    <div className="roadmap__stepInfo">
                        <h2 className="bottom__title roadmap__item-title">Регистрация на сайте</h2>
                        <p className="bottom__description roadmap__item-description">
                            Пройдите процедуру регистрации на сайте для<br/> открытия счета. Нажмите кнопку «Регистрация»<br/> и заполните все необходимые поля
                        </p>
                    </div>
                </div>

                <div className="roadmap__item">
                    <div className="roadmap__step">
                        <img className="stepImage" src={Step2} alt="Шаг второй" />
                    </div>
                    <div className="roadmap__stepInfo">
                        <h2 className="bottom__title roadmap__item-title">Открывайте депозит</h2>
                        <p className="bottom__description roadmap__item-description">
                            Сделайте инвестицию на удобный срок на<br/> сумму от 100 рублей и ваши деньги начнут<br/> работать на вас
                        </p>
                    </div>
                </div>

                <div className="roadmap__item">
                    <div className="roadmap__step">
                        <img className="stepImage" src={Step3} alt="Шаг третий" />
                    </div>
                    <div className="roadmap__stepInfo">
                        <h2 className="bottom__title roadmap__item-title">Распоряжайтесь прибылью</h2>
                        <p className="bottom__description roadmap__item-description">
                            По факту окончания периода инвестиции вклад<br/> с прибылью будут доступы для вывода или<br/> создания нового депозита
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}