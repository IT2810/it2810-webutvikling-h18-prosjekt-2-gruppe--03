import React, {
  Component
} from 'react'
import "./TextComponent.css"

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      author: "",
      text: "",
    };
  }

  // Generates a URL from props
  componentWillMount() {
    let urlBase = "http://localhost:3000/media/text/";
    let completeUrl = urlBase + "/" + this.props.category + "/" + this.props.textNr + ".js";
    this.setState({
      url: completeUrl,
    });
  }

  // Fetches the text from the url
  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then(data => this.setState({
        author: data.author,
        text: data.text
      }))
      .catch(function(error) {
        console.log(error);
      });
  }

  // Renders gallery text if it exist, if not, shows the welcome text
  render() {
    let isNotStartPage = this.state.text
    if (!isNotStartPage) {
      return (
        <div>
          <p> Hello there </p>
        </div>
      );
    } else {
      return (
        <div> {
          this.state.text.split('\n').map((item, i) => {
            return <p key = {i}> {item} < /p>;
          })
        }
        <p className = "text-author" > -{this.state.author} </p>
        </div>
      );
    }
  }
}

export default TextComponent;
