import React, {Component} from 'react'
import './ImageComponent.css';

class ImageComponent extends Component {

    constructor() {
        super();
        this.state = {
            svg: ""
        }
    };


    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps.category: " + prevProps.category + ", this.props.category: " + this.props.category) ;
      console.log("prevProps.fileNumber: " + prevProps.fileNumber + ", this.props.fileNumber: " + this.props.fileNumber);

      if (prevProps.category === this.props.category && prevProps.fileNumber === this.props.fileNumber) {
          console.log("did not update yey");
          return;
      }
      let urlBase = "/media/img/";
      let cat = this.props.category;
      let fileNr = this.props.fileNumber;
      let completeUrl = urlBase + cat + "/img" + fileNr + ".svg";
      console.log(completeUrl);
      fetch(completeUrl)
            .then(response => response.text())
            //.then(xmlString => (new DOMParser()).parseFromString(xmlString, "text/xml"))
            .then(data => this.setState({svg: data}));


    };


    render() {
        if(this.props.category===""){
            return null;
          }
        return <div className="Image-component" dangerouslySetInnerHTML={{__html: this.state.svg}} />
    };

};

export default ImageComponent;
