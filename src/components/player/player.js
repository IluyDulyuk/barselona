import './player.scss';

const Player = ({video}) => {

    return (
        <section className="player">
            <div className="player__container container">
                <div className="player__wrapper">
                    <iframe width="1020" height="570" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Player;
