import { useState } from "react";
import "../../styles/HowWeEarning/HowWeEarn.scss";
import "../../styles/HowWeEarning/Media.scss";


export const HowWeEarning = (): JSX.Element => {
    const [moreInfo, setMoreInfo] = useState<string>('Вы нажали на кнопку "Читать далее" и Вам высветился подробнейший текст о данной услуге.');
    
    const clickReadMore = (): void =>  {
        const moreInfo = document.querySelector(".howWeEarn__moreInfo");
        moreInfo?.classList.toggle("moreInfo--active")

        const readMore = document.querySelector(".howWeEarn__readMore");
        readMore?.classList.toggle("readMore--active");
    }


    return (
        <div className="howWeEarn__wrapper">
            <div className="howWeEarn__text__content">
                <h1 className="text__content__title">Как мы зарабатываем?</h1>
                <div className="text__content">
                    <p>В основе нашей бизнес-модели лежит принцип 3-х уровневой<br/> диверсификации – ресурсов, инвестиций и рисков</p>
                    <p>Что это значит? Если мы инвестируем в один из нишевых проектов, то<br/> обязательно подбираем смежные проекты в этой же нише – менее<br/> рискованные и более короткие с точки зрения получения прибыли.</p>
                    <p className="text__content__description-bottom descr1">
                        При таком подходе к инвестированию мы параллельно наращиваем<br/> прибыль и дивиденды с уже существующих вложений в другие проекты, чтобы иметь финансовый баланс и гарантировать выплаты дивидендов<br/> нашим инвесторам в сроки.
                        <span 
                            className="howWeEarn__readMore"
                            onClick={() => clickReadMore()}
                        >
                            Читать далее
                        </span>
                        <span className="howWeEarn__moreInfo">{moreInfo}</span>
                    </p>
                </div>

                <a href="" className="registration__button howWeEarning__button">Регистрация</a>
            </div>
            <div className="picture__content">
                <div className="block block1"></div>
                <div className="block block2"><span className="howWeEarn_block_text">Как мы работаем</span></div>
                <div className="block block3"></div>
            </div>
        </div>
    );
}