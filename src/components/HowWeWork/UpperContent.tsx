import "../../styles/HowWeWorkComponent/UpperContent.scss";

export const UpperContent = (): JSX.Element => {

    return (
        <div className="upper__content">
            <div className="picture__content">
                <div className="block block1">
                    <span>Как мы работаем</span>
                </div>
                <div className="block block2"></div>
                <div className="block block3"></div>
            </div>
            <div className="upper__text__content">
                <h2 className="content__title">Как мы работаем<br /> и на чем зарабатываем</h2>
                <p className="content__description">
                    Команда, у которой за плечами не менее 12 лет работы на разных позициях в сегменте инвестиционного бизнеса – от аудитора и аналитика отдела рисков до финансового директора инвестиционного банка. Формируя динамичный инвестиционный портфель, мы ежедневно применяем накопленный опыт в разных направлениях, и делаем упор на стартапы в сферах:
                </p>
                <a href="" className="registration__button">Регистрация</a>
            </div>
        </div>
    );
}