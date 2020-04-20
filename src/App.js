import React, { Component } from 'react'
import { Model } from './pages/Model/Model';
import { Hero } from './pages/Hero/Hero';
import { Apply } from './pages/Apply/Apply';
import { Footer } from './pages/Footer/Footer';

export class App extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Model />
                <Apply />
                <Footer />
            </div>
        )
    }
}

export default App;
