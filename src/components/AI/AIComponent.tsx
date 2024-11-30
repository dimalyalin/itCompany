import { useState } from "react";
import "../../styles/AI/AIComponent.scss";
import "../../styles/AI/Media.scss";

export const AIComponent = (): JSX.Element => {
    const [moreInfo, setMoreInfo] = useState<string>('Вы нажали на кнопку "Читать далее" и Вам высветился подробнейший текст о данной услуге.');

    const clickReadMore = (): void =>  {
        const moreInfo = document.querySelector(".moreInfo");
        moreInfo?.classList.toggle("moreInfo--active")

        const readMore = document.querySelector(".readMore");
        readMore?.classList.toggle("readMore--active");
    }


    return (
        <div className="AI__wrapper">
            <div className="picture__content">
                <div className="block block1"><span className="AI_block_text">Технология из сферы</span></div>
                <div className="block block2"></div>
                <div className="block block3"></div>
            </div>
            <div className="AI__text__content">
                <h2 className="text__content__subtitle">Технология из сферы</h2>
                <h1 className="text__content__title">Искусственный интеллект<br/> в сфере беттинга</h1>
                <p className="text__content__description descr1">Запатентованный инфопродукт собственного производства на основе искусственного интеллекта служит нам подспорьем, гарантируя стабильный, практически пассивный доход в сфере беттинга.</p>

                <h2 className="text__content__subtitle-bottom">Как это работает?</h2>
                <p className="text__content__description-bottom descr1">
                    Искусственный интеллект на основе нейросети, постоянно обучаясь, в реальном времени анализирует коэффициенты и иные переменные в зарубежных букмекерских конторах, дополняя анализ статистическими данными игры, и выносит прогноз, крайне редко ошибаясь. 
                    <span className="readMore" onClick={() => clickReadMore()}>
                        Читать далее
                    </span>
                    <span className="moreInfo">
                        {moreInfo}
                    </span>
                </p>

                <a href="" className="registration__button startEarning__button">Начните зарабатывать прямо сейчас</a>
            </div>
        </div>
    );
}