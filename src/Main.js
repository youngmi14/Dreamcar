import React, { Component } from 'react'
import { Model } from './pages/Model/Model';
import { Hero } from './pages/Hero/Hero';
import { Apply } from './pages/Apply/Apply';
import { Footer } from './pages/Footer/Footer';
import TheWorldOfMaserati from './pages/TheWorldOfMaserati/TheWorldOfMaserati';

export class Main extends Component {

    render() {
        return (
            <div>
                <Hero />
                <Model />
                <TheWorldOfMaserati />
                <Apply />
                <Footer />
            </div>
        )
    }
}

export default Main;
