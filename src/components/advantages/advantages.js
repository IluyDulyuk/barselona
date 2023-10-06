import AdvantagesItem from '../advantagesItem/advantagesItem';

import './advantages.scss';

const Advantages = () => {

    return (
        <section className="advantages">
            <div className="advantages__container container">
                <div className="advantages__wrapper wrapper">
                    <div className="advantages__content content">
                        <h3 className="advantages__title title">ПРЕИМУЩЕСТВА КЛУБА</h3>
                    </div>
                    <div className="advantages__content content">
                        <div className="advantages__list">
                            <AdvantagesItem name="ПРЕИМУЩЕСТВО В ПОЛЬЗОВАНИИ ИНФРАСТРУКТУРЫ" text="Текст" />
                            <AdvantagesItem name="ПРЕИМУЩЕСТВО В ПОЛЬЗОВАНИИ ИНФРАСТРУКТУРЫ" text="Текст" />
                            <AdvantagesItem name="ПРЕИМУЩЕСТВО В ПОЛЬЗОВАНИИ ИНФРАСТРУКТУРЫ" text="Текст" />
                            <AdvantagesItem name="ПРЕИМУЩЕСТВО В ПОЛЬЗОВАНИИ ИНФРАСТРУКТУРЫ" text="Текст" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;
