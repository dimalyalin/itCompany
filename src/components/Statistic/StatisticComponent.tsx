import "../../styles/Statistic/StatisticComponent.scss";
import "../../styles/Statistic/Media.scss";

export const StatisticComponent = (): JSX.Element => {


    return (
        <div className="statistic__wrapper">
            <div className="statistic__header">
                <h2 className="content__title statistic__title">Статистика компании</h2>
            </div>
            <div className="statistic__content">
                <div className="stat stat1">
                    <p className="upper__text">932</p>
                    <p className="lower__text">Работаем (дней)</p>
                </div>
                <div className="stat stat2">
                    <p className="upper__text">960696</p>
                    <p className="lower__text">Всего инвесторов</p>
                </div>
                <div className="stat stat3">
                    <p className="upper__text">67</p>
                    <p className="lower__text">Новых за 24 часа</p>
                </div>
                <div className="stat stat4">
                    <p className="upper__text">109500р</p>
                    <p className="lower__text">Среднее пополнение</p>
                </div>
            </div>
            <div className="statistic__controls">
                <a className="registration__button unionUs__button" href="">Присоединиться к нам</a>
                <a className="statistic__calcButton" href="">Калькулятор прибыли</a>
            </div>
        </div>
    );
}