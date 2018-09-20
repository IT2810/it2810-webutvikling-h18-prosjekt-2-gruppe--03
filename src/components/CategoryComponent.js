import React, {Component} from 'react'
import "./CategoryComponent.css"

class CategoryComponent extends React.Component{
  constructor(){
    super();
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

    alert(`You chose the ${this.state.pictures}, ${this.state.texts} and ${this.state.sounds} options.`);
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
            type="radio" value="option1"
            checked={this.state.pictures === "option1"}
            onChange={this.handleChange1}/>
          birds
        </label>
      </li>

        <li>
          <label>
            <input
              type="radio" value="option2"
              checked={this.state.pictures === "option2"}
              onChange={this.handleChange1}/>
            flowers
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio" value="option3"
              checked={this.state.pictures === "option3"}
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
              type="radio" value="option1"
              checked={this.state.texts === "option1"}
              onChange={this.handleChange2}/>
            cats
          </label>
        </li>

          <li>
            <label>
              <input
                type="radio" value="option2"
                checked={this.state.texts === "option2"}
                onChange={this.handleChange2}/>
              chocolate
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio" value="option3"
                checked={this.state.texts === "option3"}
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
                type="radio" value="option1"
                checked={this.state.sounds === "option1"}
                onChange={this.handleChange3}/>
              animals
            </label>
          </li>

            <li>
              <label>
                <input
                  type="radio" value="option2"
                  checked={this.state.sounds === "option2"}
                  onChange={this.handleChange3}/>
                food
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio" value="option3"
                  checked={this.state.sounds === "option3"}
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
