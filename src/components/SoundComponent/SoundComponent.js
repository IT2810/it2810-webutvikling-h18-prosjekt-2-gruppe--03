import React, {Component} from 'react';
import './SoundComponent.css';

// This is a child of MediaComponent
class SoundComponent extends Component {
    category;
    fileNumber;

    render() {
        if (this.props.category === "")
            return null;

        return (
            <div className="SoundComponent">
                <audio controls autoPlay
                       src={`media/sound/${this.props.category}/${getFileName(this.props.category, this.props.fileNumber)}`}
                       onError={handleAudioError}>
                    Your browser does not support HTML5 audio.
                </audio>
                <p className="attribution">
                    {getFileName(this.props.category, this.props.fileNumber, attributionDict)},&nbsp;
                    <a href="http://soundbible.com">SoundBible.com</a>
                </p>
            </div>
        );
    }
}

const fileDict = {
    "animals": ["6-cat-meows.mp3", "cat-stevens.mp3", "labrador-barking.mp3", "lion.mp3"],
    "food": ["apple-bite.mp3", "eat-chips.mp3", "smack-lips.mp3", "straw-slurp.mp3"],
    "footsteps": ["footsteps.mp3", "footsteps-on-cement.mp3", "hard-shoes.mp3", "hiking-a-trail.mp3"],
};

// Contains the creators of the sound files in the respective places in fileDict
const attributionDict = {
    "animals": ["Mr Smith", "Cat Stevens", "Daniel Simion", "Mike Koenig"],
    "food": ["Simon Craggs", "Caroline Ford", "Mike Koenig", "Mike Koenig"],
    "footsteps": ["Mike Koenig", "[Licensed under Public Domain]", "Daniel Simion", "[Licensed under Public Domain]"],
};

// Gives the file name from chosen category and file number
function getFileName(category, fileNumber, dict = fileDict) {
    if (category === undefined || category === "") {
        console.error("Category was undefined or an empty string!");
        return;
    }

    return dict[category][fileNumber - 1];
}

function handleAudioError(event) {
    console.error("Could not find audio source file: " + event.target.src);
}

export default SoundComponent;
