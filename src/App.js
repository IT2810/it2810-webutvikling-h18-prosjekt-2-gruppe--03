import React, {Component} from 'react';
// import HeaderComponent from './components/HeaderComponent';
import SoundComponent from "./components/SoundComponent/SoundComponent.js";
import TextComponent from './components/TextComponent/TextComponent.js';

import GalleryComponent from './components/GalleryComponent/GalleryComponent.js';
import ImageComponent from './components/ImageComponent/ImageComponent.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                
                <ImageComponent />
                <TextComponent category="cats" textNr="text1" />
                <GalleryComponent />

                <SoundComponent />

            </div>
        );
    }
}

export default App;
