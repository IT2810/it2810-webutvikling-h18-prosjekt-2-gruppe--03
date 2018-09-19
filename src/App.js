import React, {Component} from 'react';
import HeaderComponent from './components/HeaderComponent';
import SoundComponent from "./components/SoundComponent";
import TextComponent from './components/TextComponent';
import CategoryComponent from './components/CategoryComponent';
import TabComponent from './components/TabComponent';
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
                <HeaderComponent />
                <TextComponent category="cats" textNr="text1"/>
                <TabComponent />
                <SoundComponent />
                <CategoryComponent />
            </div>
        );
    }
}

export default App;
