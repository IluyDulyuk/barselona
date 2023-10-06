import ChoiceSelect from '../choiceSelect/choiceSelect';

import './choice.scss';

import choiceImage from './images/choice__image.jpg';

const Choice = () => {

    return (
        <section className="choice">
            <div className="choice__container container">
                <div className="choice__wrapper wrapper">
                    <div className="choice__content content">
                        <h2 className="choice__title title">СДЕЛАЙТЕ <br /> СВОЙ ВЫБОР</h2>
                        <div className="choice__list">
                            <ChoiceSelect
                                options={[{text: 'корпус'}, {text: 'корпус 1'}, {text: 'корпус 2'}, {text: 'корпус 3'}]}
                            />
                            <ChoiceSelect
                                options={[{text: 'этаж'}, {text: 'этаж 1'}, {text: 'этаж 2'}, {text: 'этаж 3'}]}
                            />
                            <ChoiceSelect
                                options={[{text: 'этаж'}, {text: 'этаж 1'}, {text: 'этаж 2'}, {text: 'этаж 3'}]}
                            />
                            <ChoiceSelect
                                options={[{text: 'этаж'}, {text: 'этаж 1'}, {text: 'этаж 2'}, {text: 'этаж 3'}]}
                            />
                            <ChoiceSelect
                                options={[{text: 'этаж'}, {text: 'этаж 1'}, {text: 'этаж 2'}, {text: 'этаж 3'}]}
                            />
                            <ChoiceSelect
                                options={[{text: 'этаж'}, {text: 'этаж 1'}, {text: 'этаж 2'}, {text: 'этаж 3'}]}
                            />
                        </div>
                    </div>
                    <div className="choice__content content">
                        <div className="choice__image">
                            <img src={choiceImage} alt="choiceImage" />
                        </div>
                    </div>
                </div>
                <div className="choice__button">
                    <a href="#">
                        <button className="yellow-button">ВЫБЕРИТЕ КВАРТИРУ</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Choice;
