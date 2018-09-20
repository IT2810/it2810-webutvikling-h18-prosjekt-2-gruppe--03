import React, {Component} from 'react';

class SoundComponent extends Component {
  //This is a child of media component
    category;
    fileNumber;

    render() {
        if (this.props.category === "")
            return null;

        return (
            <div className="SoundComponent">
                <audio controls autoPlay
                       src={`/media/sound/${this.props.category}/${getFileName(this.props.category, this.props.fileNumber)}`}
                       onError={handleAudioError}>
                    Your browser does not support HTML5 audio.
                </audio>
            </div>
        );
    }
}

const fileDict = {
    "animals": ["6-cat-meows.mp3", "cat-stevens.mp3", "labrador-barking.mp3", "lion.mp3"],
    "food": ["apple-bite.mp3", "eat-chips.mp3", "smack-lips.mp3", "straw-slurp.mp3"],
    "footsteps": ["footsteps.mp3", "footsteps-on-cement.mp3", "hard-shoes.mp3", "hiking-a-trail.mp3"]
};

// Gives the file name from chosen category and file number
function getFileName(category, fileNumber) {
    if (category === undefined || category === "") {
        console.error("Category was undefined or an empty string!");
        return;
    }

    return fileDict[category][fileNumber - 1];
}

function handleAudioError(event) {
    console.error("Could not find audio source file: " + event.target.src);
}

export default SoundComponent;
