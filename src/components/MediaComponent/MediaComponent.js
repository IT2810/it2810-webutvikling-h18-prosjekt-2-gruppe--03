import React, {Component} from 'react'
import ImageComponent from "../ImageComponent/ImageComponent";
import TextComponent from "../TextComponent/TextComponent";
import SoundComponent from "../SoundComponent/SoundComponent";

class MediaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The arrays below contain the media file numbers, which are sent to the respective media components,
            // chosen by the active tab number (minus 1, since they're in the range [1, 4])
            currentPictureFileNumbers: [1, 2, 3, 4],
            currentTextFileNumbers: [1, 2, 3, 4],
            currentSoundFileNumbers: [1, 2, 3, 4]
        };
    }

    generateNewExhibition() {
        shuffleArray(this.state.currentPictureFileNumbers);
        shuffleArray(this.state.currentTextFileNumbers);
        shuffleArray(this.state.currentSoundFileNumbers);
    }

    componentWillUpdate(nextProps, nextState) {
        if (!nextProps.shouldGenerateNewExhibition)
            return;

        this.generateNewExhibition();
    }

    render() {
        return (
            <div className="MediaComponent">
                <ImageComponent category={this.props.imageCategory} // Active tab numbers are in the range [1, 4]
                                fileNumber={this.state.currentPictureFileNumbers[this.props.activeTab - 1]} />
                <TextComponent category={this.props.textCategory}
                               fileNumber={this.state.currentTextFileNumbers[this.props.activeTab - 1]} />
                <SoundComponent category={this.props.soundCategory}
                                fileNumber={this.state.currentSoundFileNumbers[this.props.activeTab - 1]} />
            </div>
        );
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default MediaComponent;
