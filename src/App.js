import React, {Component} from 'react';
import GalleryComponent from './components/GalleryComponent/GalleryComponent.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">The Gallery</h1>
                </header>
                <GalleryComponent />
            </div>
        );
    }
}

export default App;
