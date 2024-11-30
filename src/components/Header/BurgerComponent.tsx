import "../../styles/HeaderComponent/BurgerComponent.scss";


export const BurgerComponent = (): JSX.Element => {
    const activateBurger = () => {
        const navigationList = document.querySelectorAll(".navigation .menu__item");

        navigationList.forEach((e) => {
            e.classList.toggle("menu__item--active");
        })

        const burgerButton = document.querySelector(".burger__wrapper");
        burgerButton?.classList.toggle("burger__wrapper--active");

        const headerButton = document.querySelector(".header__button");
        headerButton?.classList.toggle("header__button--burger__active")
    }
    

    return (
        <div className="burger__wrapper" onClick={() => activateBurger()}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
}