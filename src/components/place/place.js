import TransparentButton from '../transparentButton/transparentButton';

import './place.scss';

import placeImageMin1 from './images/place__image--min-1.jpg';
import placeImageMin2 from './images/place__image--min-2.jpg';
import placeImageMin3 from './images/place__image--min-3.jpg';
import placeImageBig from './images/place__image--big.jpg';

const Place = () => {

    return (
        <section className="place">
            <div className="place__container container">
                <div className="place__wrapper wrapper">
                    <div className="place__content content">
                        <h2 className="place__title title">РАСПОЛОЖЕНИЕ</h2>
                    </div>
                    <div className="place__content content">
                        <p className="place__text text">Экологически чистый, престижный район южной части города Бишкек, практически на южной магистрали</p>
                    </div>
                </div>
                <div className="place__images">
                    <div className="place__min">
                        <img src={placeImageMin1} alt="placeImageMin1" />
                        <img src={placeImageMin2} alt="placeImageMin2" />
                        <img src={placeImageMin3} alt="placeImageMin3" />
                    </div>
                    <div className="place__big">
                        <img src={placeImageBig} alt="placeImageBig" />
                    </div>
                </div>
                <div className="place__button">
                    <a href="#">
                        <TransparentButton text="ОЦЕНИТЕ РАСПОЛОЖЕНИЕ" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Place;
