import TransparentButton from '../transparentButton/transparentButton';

import './footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__wrapper wrapper">
                    <div className="footer__content content">
                        <h2 className="footer__title title">КОНТАКТЫ</h2>
                    </div>
                    <div className="footer__content content">
                        <form className="footer__form form">
                            <h4 className="form__title">ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h4>
                            <input type="text" className='form__input' placeholder='ВАШЕ ИМЯ' />
                            <input type="text" className='form__input' placeholder='ТЕЛЕФОН' />
                            <TransparentButton text='ЗАКАЗАТЬ ЗВОНОК' />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
