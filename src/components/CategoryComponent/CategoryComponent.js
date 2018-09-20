import React, {Component} from 'react'
import "./CategoryComponent.css"

// This is a child of GalleryComponent
class CategoryComponent extends Component {
    constructor(props) {
        super(props);
        // The state values are the chosen categories for each media type
        this.state = {
            picture: "Birds",
            text: "Cats",
            sound: "Animals",
        };

        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSoundChange = this.handleSoundChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Updates state when picture category changes
    handlePictureChange(event) {
        this.setState({picture: event.target.parentElement.textContent});
    }

    // Updates state when text category changes
    handleTextChange(event) {
        this.setState({text: event.target.parentElement.textContent});
    }

    // Updates state when sound category changes
    handleSoundChange(event) {
        this.setState({sound: event.target.parentElement.textContent});
    }

    // Sends state values to GalleryComponent when button is clicked
    handleSubmit(event) {
        event.preventDefault();

        this.props.getCategories([this.state.picture.toLowerCase(), this.state.text.toLowerCase(), this.state.sound.toLowerCase()]);
    }

    // Renders 12 radio buttons - 3 for each media type - and a submit button
    render() {
        return (
            <div className="CategoryComponent">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Pictures</p>

                        <label>
                            <input type="radio" onChange={this.handlePictureChange}
                                   checked={this.state.picture === "Birds"} />
                            Birds
                        </label>
                        <label>
                            <input type="radio" onChange={this.handlePictureChange}
                                   checked={this.state.picture === "Flowers"} />
                            Flowers
                        </label>
                        <label>
                            <input type="radio" onChange={this.handlePictureChange}
                                   checked={this.state.picture === "Landscape"} />
                            Landscape
                        </label>
                    </div>

                    <div>
                        <p>Texts</p>

                        <label>
                            <input type="radio" onChange={this.handleTextChange}
                                   checked={this.state.text === "Cats"} />
                            Cats
                        </label>
                        <label>
                            <input type="radio" onChange={this.handleTextChange}
                                   checked={this.state.text === "Cars"} />
                            Cars
                        </label>
                        <label>
                            <input type="radio" onChange={this.handleTextChange}
                                   checked={this.state.text === "Moon"} />
                            Moon
                        </label>
                    </div>

                    <div>
                        <p>Sounds</p>

                        <label>
                            <input type="radio" onChange={this.handleSoundChange}
                                   checked={this.state.sound === "Animals"} />
                            Animals
                        </label>
                        <label>
                            <input type="radio" onChange={this.handleSoundChange}
                                   checked={this.state.sound === "Food"} />
                            Food
                        </label>
                        <label>
                            <input type="radio" onChange={this.handleSoundChange}
                                   checked={this.state.sound === "Footsteps"} />
                            Footsteps
                        </label>
                    </div>

                    <div className="category-button">
                        <button type="submit">Make your choice</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CategoryComponent;
