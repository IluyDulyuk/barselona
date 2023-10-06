import './infrastructureTabsItem.scss';

const InfrastructureTabsItem = ({text, image, isActive}) => {

    return (
        <div className={`infrastructure-tabs__content ${isActive === 'active' ? 'active' : ''}`}>
            <div className="infrastructure-tabs__text" dangerouslySetInnerHTML={{__html: text}}></div>
            <div className="infrastructure-tabs__image">
                <img src={image} alt="infrastructure-tabs__image" />
            </div>
        </div>
    )
}

export default InfrastructureTabsItem;
