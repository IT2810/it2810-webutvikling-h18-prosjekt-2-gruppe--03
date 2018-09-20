import React, {Component} from 'react'
import "./TextComponent.css"

// This is a child component of media component
class TextComponent extends Component {
    fileNumber;

    constructor(props) {
        super(props);
        this.state = {
            author: "",
            text: "",
        };
    }

    // Generates a url from chosen category and file number and fetches the text from the url
    componentDidUpdate(prevProps, prevState) {
        // Will not update again if there are no changes
        if (prevProps.category === this.props.category && prevProps.fileNumber === this.props.fileNumber)
            return;

        let category = this.props.category;
        let fileNumber = this.props.fileNumber;
        let completeUrl = "/media/text/" + category + "/text" + fileNumber + ".js";
        fetch(completeUrl)
            .then((response) => response.json())
            .then(data => this.setState({
                author: data.author,
                text: data.text,
            }))
            .catch(function (error) {
                console.error(error);
            });
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        let isNotStartPage = this.state.text;
        if (!isNotStartPage) {
            return (
                <div className="welcome-text">
                    <p>Welcome to our gallery!<br />
                        You can choose between categories
                        for each media type in the bar to the left.<br />
                        You can also switch between the tabs above
                        to display different exhibitions.<br />
                        Please enjoy the opportunity
                        to bask in the beauty
                        of multimedia art.</p>
                </div>
            );
        } else {
            return (
                <div className="Text-component">
                    {this.state.text.split('\n').map((item, i) => <p key={i}> {item} </p>)}
                    <p className="text-author"> -{this.state.author} </p>
                </div>
            );
        }
    }
}

export default TextComponent;
