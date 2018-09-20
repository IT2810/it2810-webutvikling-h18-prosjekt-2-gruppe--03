import React, {Component} from 'react'
import './ImageComponent.css';

// This is a child of MediaComponent
class ImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {svg: ""}
    }

    componentDidUpdate(prevProps, prevState) {
        // Will not update again without change
        if (prevProps.category === this.props.category && prevProps.fileNumber === this.props.fileNumber)
            return;

        // Generates URL from the chosen category and file number
        let urlBase = "/media/img/";
        let cat = this.props.category;
        let fileNr = this.props.fileNumber;
        let completeUrl = urlBase + cat + "/img" + fileNr + ".svg";

        // Fetches the file from server, converts it to text and saves it in state
        fetch(completeUrl)
            .then(response => response.text())
            .then(data => this.setState({svg: data}));
    }

    // Renders an SVG image if a category is chosen, nothing otherwise
    render() {
        if (this.props.category === "") {
            return null;
        }
        return <div className="ImageComponent" dangerouslySetInnerHTML={{__html: this.state.svg}} />
    }
}

export default ImageComponent;
