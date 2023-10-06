import TransparentButton from '../transparentButton/transparentButton'

import './investor.scss'

const Investor = () => {

    return (
        <section className="investor">
            <div className="investor__wrapper">
                <h2 className="investor__title">СТАТЬ ИНВЕСТОРОМ</h2>
                <a href="#">
                    <TransparentButton text="ВСТУПИТЬ В КЛУБ" />
                </a>
            </div>
        </section>
    )
}

export default Investor
