import HeaderContentComponent from "./HeaderContentComponent";
import HeaderButtonComponent from "./HeaderButtonComponent";
import "../../styles/HeaderComponent/HeaderComponent.scss";
import "../../styles/HeaderComponent/BurgerComponent.scss";
import "../../styles/HeaderComponent/Media.scss";


export const HeaderComponent = (): JSX.Element => {
    return (
        <div className="header__wrapper">
            <HeaderButtonComponent />
            <HeaderContentComponent />
        </div>

    )
}

