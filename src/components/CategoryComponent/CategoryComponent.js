import React, {Component} from 'react'
import "./CategoryComponent.css"

class CategoryComponent extends React.Component{
  constructor(props){
    super(props);
    this.state= {pictures:"", texts:"", sounds:""};

    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSoundChange = this.handleSoundChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePictureChange(event) {
    this.setState({
      pictures: event.target.value
    });
  }
  handleTextChange(event) {
    this.setState({
      texts: event.target.value
    });
  }
  handleSoundChange(event) {
    this.setState({
      sounds: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getCategories([this.state.pictures,this.state.texts,this.state.sounds]);
    //alert(`You chose the ${this.state.pictures}, ${this.state.texts} and ${this.state.sounds} options.`);
  }

  render() {
  return (
    <div className="left-aligned">
    <form onSubmit={this.handleSubmit}>
    <p>Pictures</p>
      <ul>
      <li>
        <label>
          <input
            type="radio" value="birds"
            checked={this.state.pictures === "birds"}
            onChange={this.handlePictureChange}/>
          birds
        </label>
      </li>

        <li>
          <label>
            <input
              type="radio" value="flowers"
              checked={this.state.pictures === "flowers"}
              onChange={this.handlePictureChange}/>
            flowers
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio" value="landscape"
              checked={this.state.pictures === "landscape"}
              onChange={this.handlePictureChange}/>
            landscape
          </label>
        </li>
      </ul>

      <p>Texts</p>
        <ul>
        <li>
          <label>
            <input
              type="radio" value="cats"
              checked={this.state.texts === "cats"}
              onChange={this.handleTextChange}/>
            cats
          </label>
        </li>

          <li>
            <label>
              <input
                type="radio" value="chocolate"
                checked={this.state.texts === "chocolate"}
                onChange={this.handleTextChange}/>
              chocolate
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio" value="moon"
                checked={this.state.texts === "moon"}
                onChange={this.handleTextChange}/>
              moon
            </label>
          </li>
        </ul>

        <p>Sounds</p>
          <ul>
          <li>
            <label>
              <input
                type="radio" value="animals"
                checked={this.state.sounds === "animals"}
                onChange={this.handleSoundChange}/>
              animals
            </label>
          </li>

            <li>
              <label>
                <input
                  type="radio" value="food"
                  checked={this.state.sounds === "food"}
                  onChange={this.handleSoundChange}/>
                food
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio" value="footsteps"
                  checked={this.state.sounds === "footsteps"}
                  onChange={this.handleSoundChange}/>
                footsteps
              </label>
            </li>
          </ul>

      <button type="submit">Make your choice</button>
    </form>
    </div>
  );
}
}

export default CategoryComponent;
