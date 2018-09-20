import React, {Component} from 'react'
import ImageComponent from "../ImageComponent/ImageComponent";
import TextComponent from "../TextComponent/TextComponent";
import SoundComponent from "../SoundComponent/SoundComponent";

class MediaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The arrays below contain the media file numbers, which are sent to the respective media components,
            // chosen by the current tab index (e.g. 0)
            currentPictureFileNumbers: [1, 1, 1, 1],
            currentTextFileNumbers: [1, 1, 1, 1],
            currentSoundFileNumbers: [1, 1, 1, 1]
        };
    }

    generateNewExhibition() {
        MediaComponent.fillArrayWithRandomNumbers(this.state.currentPictureFileNumbers);
        MediaComponent.fillArrayWithRandomNumbers(this.state.currentTextFileNumbers);
        MediaComponent.fillArrayWithRandomNumbers(this.state.currentSoundFileNumbers);

        // TODO: send file number to Picture, Text and Sound
    }

    static fillArrayWithRandomNumbers(array) {
        const numberOfFilesPerCategory = 4;

        for (let i = 0; i < array.length; i++)
            array[i] = 1 + Math.floor(Math.random() * numberOfFilesPerCategory);
    }

    componentWillUpdate(nextProps, nextState) {
        this.generateNewExhibition();
    }

    render() {
        return (
            <div className="MediaComponent">
                <ImageComponent category={this.props.imageCategory}
                                fileNumber={this.state.currentPictureFileNumbers[this.props.activeTab]} />
                <TextComponent category={this.props.textCategory}
                               fileNumber={this.state.currentTextFileNumbers[this.props.activeTab]} />
                <SoundComponent category={this.props.soundCategory}
                                fileNumber={this.state.currentSoundFileNumbers[this.props.activeTab]} />
            </div>
        );
    }
}

export default MediaComponent;
