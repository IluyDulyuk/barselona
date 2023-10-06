import { useState, useEffect } from 'react';


import './advantagesItem.scss';

import advantagesItemIcon from './images/advatagesItem__icon.svg';

const AdvantagesItem = ({name, text}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(isOpen => !isOpen)} className={`advantages-item ${isOpen ? 'active' : ''}`}>
            <div className="advantages-item__header">
                <h4 className="advantages-item__name">{name}</h4>
                <img src={advantagesItemIcon} alt="advantagesItemIcon" />
            </div>
            <div className="advantages-item__text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AdvantagesItem;
