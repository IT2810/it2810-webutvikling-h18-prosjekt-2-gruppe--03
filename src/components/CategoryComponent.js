import React, {Component} from 'react'
import "./CategoryComponent.css"

class CategoryComponent extends React.Component{
  constructor(props){
    super(props);
    this.state= {pictures:"", texts:"", sounds:""};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(event) {
    this.setState({
      pictures: event.target.value
    });
  }
  handleChange2(event) {
    this.setState({
      texts: event.target.value
    });
  }
  handleChange3(event) {
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
            onChange={this.handleChange1}/>
          birds
        </label>
      </li>

        <li>
          <label>
            <input
              type="radio" value="flowers"
              checked={this.state.pictures === "flowers"}
              onChange={this.handleChange1}/>
            flowers
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio" value="landscape"
              checked={this.state.pictures === "landscape"}
              onChange={this.handleChange1}/>
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
              onChange={this.handleChange2}/>
            cats
          </label>
        </li>

          <li>
            <label>
              <input
                type="radio" value="chocolate"
                checked={this.state.texts === "chocolate"}
                onChange={this.handleChange2}/>
              chocolate
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio" value="moon"
                checked={this.state.texts === "moon"}
                onChange={this.handleChange2}/>
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
                onChange={this.handleChange3}/>
              animals
            </label>
          </li>

            <li>
              <label>
                <input
                  type="radio" value="food"
                  checked={this.state.sounds === "food"}
                  onChange={this.handleChange3}/>
                food
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio" value="footsteps"
                  checked={this.state.sounds === "footsteps"}
                  onChange={this.handleChange3}/>
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
