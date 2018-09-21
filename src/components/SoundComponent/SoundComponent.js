import React, {Component} from 'react';

class SoundComponent extends Component {
    category;
    fileNumber;

    componentDidUpdate() {
        this.refs.audio.pause();
        this.refs.audio.load();
        let playPromise = this.refs.audio.play();

        // Ensures that the above code is not run before the audio is finished preparing to play
        if (playPromise !== undefined) {
            playPromise.then(_ => {})
                .catch(error => {});
        }
    }

    render() {
      if(this.props.category===""){
        return null;
      }
      console.log("this.props.category: " + this.props.category + ", this.props.fileNumber: " + this.props.fileNumber);
        return (
            <div className="SoundComponent">
                <audio controls ref="audio">
                    <source src={`/media/sound/${this.props.category}/${getFileName(this.props.category, this.props.fileNumber)}`} type="audio/mpeg" />
                    Your browser does not support HTML5 audio.
                </audio>
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
