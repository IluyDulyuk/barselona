import { register } from 'swiper/element/bundle';

import './gallary.scss';

import gallarySlide1 from './images/gallary__slide-1.jpg';
import gallarySlide2 from './images/gallary__slide-2.jpg';
import gallarySlide3 from './images/gallary__slide-3.jpg';

const Gallary = () => {
    register();

    return (
        <section className="gallary">
            <swiper-container
                loop="true"
                slides-per-view="auto"
                centered-slides="true"
                space-between="36"
            >
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide1} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide2} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide3} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide1} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide2} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide3} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide1} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide2} alt="gallarySlide" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="gallary__container">
                        <img src={gallarySlide3} alt="gallarySlide" />
                    </div>
                </swiper-slide>
            </swiper-container>
            <div className="gallary__button">
                <a href="#">
                    <button className="button yellow-button">ВСТУПИТЬ В КЛУБ</button>
                </a>
            </div>
        </section>
    )
}

export default Gallary;
