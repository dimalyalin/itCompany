import React from "react";
import arrowRight from "../../img/arrow-right.svg";
import "../../styles/HeaderComponent/HeaderButtonComponent.scss";

const HeaderButtonComponent = (): JSX.Element => {
    return (
        <a href="" className="header__button">
            <span>Начать зарабатывать</span>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="59.5" height="59.5" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </a>
    );
}


export default HeaderButtonComponent;