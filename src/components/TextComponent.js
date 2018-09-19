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
    // Fetches the text from the url
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.category == this.props.category || prevProps.textNr == this.props.textNr){
        console.log("did not update");
        return;
      }
      let urlBase = "/media/text/";
      let completeUrl = urlBase + "/" + this.props.category + "/" + this.props.textNr + ".js";
      this.setState({
          url: completeUrl,
      },
        fetch(this.state.url)
            .then((response) => response.json())
            .then(data => this.setState({
                author: data.author,
                text: data.text
            }))
            .catch(function (error) {
                console.log(error);
            })
          );
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        let isNotStartPage = this.state.text;
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
                        return <p key={i}> {item} </p>;
                    })
                }
                    <p className="text-author"> -{this.state.author} </p>
                </div>
            );
        }
    }
}

export default TextComponent;
