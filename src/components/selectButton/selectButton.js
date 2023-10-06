import './selectButton.scss';

import buttonSelectArrow from './images/select-button.svg';


const SelectButton = ({text}) => {

    return (
        <button className="select-button">
            {text}
            <span>
                <img src={buttonSelectArrow} alt="selectButtonArrow" />
            </span>
        </button>
    )
}

export default SelectButton;
