import React, {Component} from 'react'
import "./TextComponent.css"

class TextComponent extends Component {
    fileNumber;

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
      //console.log("prevProps.category: " + prevProps.category + ", this.props.category: " + this.props.category) ;
      //console.log("prevProps.fileNumber: " + prevProps.fileNumber + ", this.props.fileNumber: " + this.props.fileNumber);
        if (prevProps.category === this.props.category && prevProps.fileNumber === this.props.fileNumber) {
            //console.log("did not update yey");
            return;
        }
        //console.log("DID update");
        let urlBase = "/media/text/";
        let cat = this.props.category;
        let fileNr = this.props.fileNumber;
        let completeUrl = urlBase + cat + "/text" + fileNr + ".js";
        fetch(completeUrl)
                .then((response) => response.json())
                .then(data => this.setState({
                    author: data.author,
                    text: data.text,
                }))
                .catch(function (error) {
                    console.log(error);
                });
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
                    this.state.text.split('\n').map((item, i) =>  <p key={i}> {item} </p>)
                }
                    <p className="text-author"> -{this.state.author} </p>
                </div>
            );
        }
    }
}

export default TextComponent;
