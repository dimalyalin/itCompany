import "../../styles/Technologies/TechnologiesComponent.scss";
import "../../styles/Technologies/Media.scss";
import logoImage from "../../img/grid1.svg";

export const TechnologiesComponent = (): JSX.Element => {
    return (
        <div className="tech__wrapper">
            <div className="tech__top">
                <p className="tech__question bottom__title">На чем мы больше всего зарабатываем</p>
                <h2 className="tech__title content__title">Стартапы и технологии</h2>
            </div>
            <div className="tech__bottom">
                <div className="card card1">
                    <img className="card__img" src={logoImage} alt="" />
                    <h2 className="card__title">Стартапы из сферы:</h2>
                    <p className="card__description">Криптовалюты</p>
                </div>
                <div className="card card2">
                    <img className="card__img" src={logoImage} alt="" />
                    <h2 className="card__title">Технология из сферы:</h2>
                    <p className="card__description">ИИ в сфере беттинга</p>
                </div>
                <div className="card card3">
                    <img className="card__img" src={logoImage} alt="" />
                    <h2 className="card__title">Стартапы из сферы</h2>
                    <p className="card__description">Блокчейн и ICO</p>
                </div>
                <div className="card card4">
                    <img className="card__img" src={logoImage} alt="" />
                    <h2 className="card__title">Стартапы из сферы</h2>
                    <p className="card__description">VR- технологии</p>
                </div>
                <div className="card card5">
                    <img className="card__img" src={logoImage} alt="" />
                    <h2 className="card__title">Стартапы из сферы</h2>
                    <p className="card__description">Внедрение сетей 5G</p>
                </div>
            </div>
        </div>
    );
}