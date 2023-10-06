import './choiceSelect.scss';

const ChoiceSelect = ({options}) => {

    return (
        <div className="choice-select__wrapper">
            <select className="choice-select">
                {options.map(option => {
                    return (
                        <option>{option.text}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ChoiceSelect;
