import React, {Component} from 'react'
import "./CategoryComponent.css"

class CategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {picture: "", text: "", sound: ""};

        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSoundChange = this.handleSoundChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePictureChange(event) {
        this.setState({picture: event.target.parentElement.textContent});
    }

    handleTextChange(event) {
        this.setState({text: event.target.parentElement.textContent});
    }

    handleSoundChange(event) {
        this.setState({sound: event.target.parentElement.textContent});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.getCategories([this.state.picture.toLowerCase(), this.state.text.toLowerCase(), this.state.sound.toLowerCase()]);
    }

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
                                   checked={this.state.text === "Chocolate"} />
                            Chocolate
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
                    <br />
                    <button type="submit">Make your choice</button>
                </form>
            </div>
        );
    }
}

export default CategoryComponent;
