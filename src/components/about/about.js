import './about.scss';

const About = () => {

    return (
        <section className="about">
            <div className="about__container container">
                <div className="about__wrapper wrapper">
                    <div className="about__content content">
                        <h3 className="about__title title">О НАС</h3>
                    </div>
                    <div className="about__content content">
                        <p className="about__text text">
                            уютное и уникальное место, созданное для общения, развлечений и социальных мероприятий для ТЕХ КТО ЦЕНИТ ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ, КОМФОРТ, ПРИВАТНОСТЬ И БЕЗОПАСНОСТЬ
                        </p>
                        <div className="about__list">
                            <div className="about__item about-item">
                                <div className="about-item__value">
                                    15
                                    <span></span>
                                </div>
                                <p className="about-item__name">ДОМОВ</p>
                            </div>
                            <div className="about__item about-item">
                                <div className="about-item__value">
                                    1500
                                    <span></span>
                                </div>
                                <p className="about-item__name">КВАРТИР</p>
                            </div>
                            <div className="about__item about-item">
                                <div className="about-item__value">
                                    20
                                    <span>ОБЪЕКТОВ</span>
                                </div>
                                <p className="about-item__name">ИНФРАСТРУКТУРЫ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
