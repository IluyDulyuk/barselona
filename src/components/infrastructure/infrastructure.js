import { useState } from 'react';


import InfrastructureTabsItem from '../infrastructureTabsItem/infrastructureTabsItem';

import './infrastructure.scss';

import contentImage from '../infrastructureTabsItem/images/infrastucture-tabs__image.jpg';

const Infrastructure = () => {

    const [active, setActive] = useState(0);

    const tabs = [
        {text: "плавательный бассейн"},
        {text: "фитнес-центр"},
    ]

    const contents = [
        {text: `Плавательный бассейн олимпийского стандарта размером 50 метров и с 8 дорожками представляет собой выдающуюся спортивную инфраструктуру, которая соответствует международным требованиям для проведения соревнований по плаванию и тренировок профессиональных пловцов. <br> <br>  1. <span>Оборудование</span>: В бассейне обычно будут установлены стартовые блоки на каждой дорожке для начала гонки. Также бассейн оборудован системой фильтрации воды и регулирования температуры, чтобы обеспечивать оптимальные условия для плавания <br> <br>  2. <span>Освещение</span>: Бассейн имеет хорошее освещение как внутри, так и вокруг бассейна для обеспечения видимости и безопасности <br> <br>  3. <span>Трибуны</span>: Рядом с бассейном находятся трибуны для зрителей. Трибуны вмещают большое количество зрителей и обеспечивают хороший обзор на происходящее в бассейне <br> <br>  4. <span>Спортивное оборудование</span>: Вокруг бассейна располагаются специальные комнаты для хранения и обслуживания спортивного оборудования, такого как ласты, очки и другие аксессуары для плавания <br> <br>  5. <span>Безопасность</span>: Бассейн оборудован средствами безопасности, включая спасательные посты и средства для первой помощи`, image: contentImage},
        {text: `Плавательный бассейн олимпийского стандарта размером 50 метров и с 8 дорожками представляет собой выдающуюся спортивную инфраструктуру, которая соответствует международным требованиям для проведения соревнований по плаванию и тренировок профессиональных пловцов. <br> <br>  1. <span>Оборудование</span>: В бассейне обычно будут установлены стартовые блоки на каждой дорожке для начала гонки. Также бассейн оборудован системой фильтрации воды и регулирования температуры, чтобы обеспечивать оптимальные условия для плавания <br> <br>  2. <span>Освещение</span>: Бассейн имеет хорошее освещение как внутри, так и вокруг бассейна для обеспечения видимости и безопасности <br> <br>  3. <span>Трибуны</span>: Рядом с бассейном находятся трибуны для зрителей. Трибуны вмещают большое количество зрителей и обеспечивают хороший обзор на происходящее в бассейне <br> <br>  4. <span>Спортивное оборудование</span>: Вокруг бассейна располагаются специальные комнаты для хранения и обслуживания спортивного оборудования, такого как ласты, очки и другие аксессуары для плавания`, image: contentImage}
    ]

    const openTab = e => setActive(+e.target.dataset.index);

    return (
        <section className="infrastructure">
            <div className="infrastructure__container container">
                <div className="infrastructure__wrapper wrapper">
                    <div className="infrastructure__content content">
                        <h2 className="infrastructure__title title">ИНФРАСТРУКТУРА</h2>
                        <div className="infrastructure__tabs infrastructure-tabs infrastructure-tabs-desctop">
                            {tabs.map((tab, i) => (
                                <div
                                    className={`infrastructure-tabs__item ${i === active ? 'active' : ''}`}
                                    data-index={i}
                                    onClick={openTab}
                                    >
                                    {tab.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="infrastructure__content content">
                        <p className="text infrastructure__text">
                            членам клуба предоставляются услуги пользования инфраструктурой клуба в зависимости от их статуса: Гость, Стандарт, Премиум, ВИП
                        </p>
                        <div className="infrastructure__tabs infrastructure-tabs infrastructure-tabs-mobile">
                            {tabs.map((tab, i) => (
                                <div
                                    className={`infrastructure-tabs__item ${i === active ? 'active' : ''}`}
                                    data-index={i}
                                    onClick={openTab}
                                    >
                                    {tab.text}
                                </div>
                            ))}
                        </div>
                        {contents.map((content, i) => (
                            <InfrastructureTabsItem text={content.text} image={content.image} isActive={i === active ? 'active' : ''} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Infrastructure;
