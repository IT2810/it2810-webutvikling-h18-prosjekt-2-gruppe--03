import React, {Component} from 'react'
import './ImageComponent.css';

class ImageComponent extends Component {
    //This is the child of media component
    constructor() {
        super();
        this.state = {svg: ""}
    };


    componentDidUpdate(prevProps, prevState) {
      // Will not update again without change
      if (prevProps.category === this.props.category && prevProps.fileNumber === this.props.fileNumber) {
          console.log("did not update yey");
          return;
      }
      // Generates url from chosen category and file number
      let urlBase = "/media/img/";
      let cat = this.props.category;
      let fileNr = this.props.fileNumber;
      let completeUrl = urlBase + cat + "/img" + fileNr + ".svg";

      // Fetches the file from server, converts it to text and saves it in state
      fetch(completeUrl)
            .then(response => response.text())
            .then(data => this.setState({svg: data}));
    };

    // Renders a svg image if a category is chosen, and is empty elsewise
    render() {
        return <div className="Image-component" dangerouslySetInnerHTML={{__html: this.state.svg}} />
    };

};

export default ImageComponent;
