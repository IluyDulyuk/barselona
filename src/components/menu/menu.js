import TransparentButton from '../transparentButton/transparentButton';

import './menu.scss';

import menuCloseImage from '../advantagesItem/images/advatagesItem__icon.svg';

const Menu = ({isActive, onCloseMenuTrigger}) => {

    return (
        <sectinon className={`menu ${isActive === 'active' ? 'active' : ''}`}>
            <div className="menu__wrapper">
                <button className="menu__close-button" aria-label='Закрыть меню' onClick={() => onCloseMenuTrigger()}>
                    <img src={menuCloseImage} alt="Закрыть меню" />
                </button>
                <ul className="menu__list">
                    <li>
                        <a href="#" className="menu__link">О нас</a>
                    </li>
                    <li>
                        <a href="#" className="menu__link">Преимущества клуба</a>
                    </li>
                    <li>
                        <a href="#" className="menu__link">Контакты</a>
                    </li>
                </ul>

                <ul className="menu__list menu__list-desctop-hide">
                    <li>
                        <a href="#" className="menu__link">Заказать звонок</a>
                    </li>
                    <li>
                        <a href="tel:+996555000000" className="menu__link">+996 555 000000</a>
                    </li>
                    <li>
                        <TransparentButton text="Вход для членов клуба" />
                    </li>
                </ul>
            </div>
        </sectinon>
    )
}

export default Menu;
