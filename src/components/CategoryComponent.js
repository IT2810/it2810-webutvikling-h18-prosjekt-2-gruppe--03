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

        // Send this.state.picture, this.state.text and this.state.sound via function to super-component
        alert(`You chose the ${this.state.picture}, ${this.state.text} and ${this.state.sound} options.`);
    }

    render() {
        return (
            <div className="CategoryComponent">
                <form onSubmit={this.handleSubmit}>
                    <p>Pictures</p>

                    <label>
                        <input type="radio" onChange={this.handlePictureChange} />
                        Birds
                    </label>
                    <label>
                        <input type="radio" onChange={this.handlePictureChange} />
                        Flowers
                    </label>
                    <label>
                        <input type="radio" onChange={this.handlePictureChange} />
                        Landscape
                    </label>

                    <p>Texts</p>

                    <label>
                        <input type="radio" onChange={this.handleTextChange} />
                        Cats
                    </label>
                    <label>
                        <input type="radio" onChange={this.handleTextChange} />
                        Chocolate
                    </label>
                    <label>
                        <input type="radio" onChange={this.handleTextChange} />
                        Moon
                    </label>

                    <p>Sounds</p>

                    <label>
                        <input type="radio" onChange={this.handleSoundChange} />
                        Animals
                    </label>
                    <label>
                        <input type="radio" onChange={this.handleSoundChange} />
                        Food
                    </label>
                    <label>
                        <input type="radio" onChange={this.handleSoundChange} />
                        Footsteps
                    </label>

                    <br />
                    <button type="submit">Make your choice</button>
                </form>
            </div>
        );
    }
}

export default CategoryComponent;
