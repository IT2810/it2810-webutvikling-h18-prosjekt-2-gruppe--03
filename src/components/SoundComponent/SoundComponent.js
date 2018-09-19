import React, {Component} from 'react';
//import '../App.css';


class SoundComponent extends Component {
    render() {
        return (
            <div className="Sound">
                <audio controls>
                    <source src="/media/sound/animals/cat-stevens.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default SoundComponent;
