import { useState } from 'react';

import Header from '../header/header';
import Offer from '../offer/offer';
import About from '../about/about';
import Gallary from '../gallary/gallary';
import Advantages from '../advantages/advantages';
import Investor from '../investor/investor';
import Player from '../player/player';
import Infrastructure from '../infrastructure/infrastructure';
import Discont from '../discont/discont';
import Choice from '../choice/choice';
import Place from '../place/place';
import Footer from '../footer/footer';
import Menu from '../menu/menu';

import './app.scss';

const App = () => {

    const [isMenuActive, setIsMenuActvie] = useState('');

    const onMenuTrigger = () => {
        setIsMenuActvie('active');
    }

    const onCloseMenuTrigger = () => {
        setIsMenuActvie('');
    }

    return (
        <main className="page">
            <Header onMenuTrigger={onMenuTrigger}/>
            <Menu isActive={isMenuActive} onCloseMenuTrigger={onCloseMenuTrigger}/>
            <Offer/>
            <About/>
            <Gallary/>
            <Advantages/>
            <Investor/>
            <Player video="https://www.youtube.com/embed/QXzZF9wQphM?si=tLBLiv9dbUTkJ6_a"/>
            <Infrastructure/>
            <Discont/>
            <Choice/>
            <Place/>
            <Footer/>
        </main>
    )
}

export default App;
