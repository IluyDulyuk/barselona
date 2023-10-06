import TransparentButton from '../transparentButton/transparentButton';

import './discont.scss';

const Discont = () => {

    return (
        <section className="discont">
            <div className="discont__wrapper">
                <h3 className="discont__title">СКИДКА НА ОБУЧЕНИЕ <br /> В BARCA ACADEMY <br /> ДЛЯ ЧЛЕНОВ КЛУБА</h3>
                <a href="#">
                    <TransparentButton text="ВСТУПИТЬ В КЛУБ" />
                </a>
            </div>
        </section>
    )
}

export default Discont;
