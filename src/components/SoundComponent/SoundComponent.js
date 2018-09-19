import React, {Component} from 'react';

class SoundComponent extends Component {
    category;
    fileNumber;

    render() {
        return (
            <div className="SoundComponent">
                <audio controls>
                    <source src={`/media/sound/${this.props.category}/${getFileName(this.props.category, this.props.fileNumber)}`} type="audio/mpeg" />
                    Your browser does not support HTML5 audio.
                </audio>
                <p>
                    <b>{this.props.category}{this.props.fileNumber}:</b>
                    {getFileName(this.props.category, this.props.fileNumber)}
                </p>
            </div>
        );
    }
}

const fileDict = {
    "animals": ["6-cat-meows.mp3", "cat-stevens.mp3", "labrador.mp3", "lion.mp3"],
    "food": ["apple-bite.mp3", "eat-chips.mp3", "smack-lips.mp3", "straw-slurp.mp3"],
    "footsteps": ["footsteps.mp3", "footsteps-on-cement.mp3", "hard-shoes.mp3", "hiking-a-trail.mp3"]
};

function getFileName(category, fileNumber) {
    if (category === undefined || category === "")
        return; // TODO:

    return fileDict[category][fileNumber - 1];
}

export default SoundComponent;
