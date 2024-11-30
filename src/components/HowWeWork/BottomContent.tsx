import "../../styles/HowWeWorkComponent/BottomContent.scss";
import logoImage from "../../img/grid1.svg";


export const BottomContent = (): JSX.Element => {
    return (
        <div className="bottom__content">
            <div className="grid grid1">
                <div className="grid__header">
                    <img className="bottom__logo-image" src={logoImage} alt="Logo" />
                    <h2 className="bottom__title">Блокчейн<br /> и криптовалюта</h2>
                </div>
                <p className="bottom__description">
                    Сегодня IT-проекты в этой сфере в центре внимания инвесторов всего мира. Но эти технологии интересуют нас не только сами по себе, мы рассматриваем перспективы их внедрение в e-commerce и в развитие маркетплейсов.
                </p>
            </div>
            <div className="grid grid2">
                <div className="grid__header">
                    <img className="bottom__logo-image" src={logoImage} alt="Logo" />
                    <h2 className="bottom__title">Искусственный интеллект в сфере беттинга</h2>
                </div>
                <p className="bottom__description">
                    Запатентованный инфопродукт собственного производства на основе искусственного интеллекта служит инструментом   получения стабильного дохода в сфере беттинга. 
                </p>
            </div>
            <div className="grid grid3">
                <div className="grid__header">
                    <img className="bottom__logo-image" src={logoImage} alt="Logo" />
                    <h2 className="bottom__title">Блокчейн<br /> и криптовалюта</h2>
                </div>
                <p className="bottom__description">
                    Некоторые инвесторы уже разуверились в этих сферах, но технология виртуальной реальности «воскресила» эти отрасли и превратила «Old School» в «New Sexy».
                </p>
            </div>
        </div>
    );
}
