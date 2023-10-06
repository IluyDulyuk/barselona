import SelectButton from '../selectButton/selectButton';
import TransparentButton from '../transparentButton/transparentButton';

import './header.scss';

const Header = ({onMenuTrigger}) => {

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__wrapper">
                    <div className="header__item">
                        <div className="header__nav">
                            <ul className="header__list">
                                <li>
                                    <a className="header__link" onClick={() => onMenuTrigger()}>МЕНЮ</a>
                                </li>
                                <li>
                                <a href="#" className="header__link header__desctop-view">ЗАКАЗАТЬ ЗВОНОК</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__item">
                        <div className="header__nav">
                            <ul className="header__list">
                                <li>
                                    <a href="tel:+996555000000" className="header__link header__desctop-view">+996 555 000000</a>
                                </li>
                                <li>
                                    <SelectButton text="Выбор квартиры" />
                                </li>
                                <li className='header__desctop-view' >
                                    <TransparentButton text="Вход для членов клуба" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
