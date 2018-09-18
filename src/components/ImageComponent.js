import React, {Component } from 'react'

class ImageComponent extends Component { 

    constructor() {
        super();
        this.state = {
            svg: "heu"
        }
    };

    

    componentDidMount() {
    
        fetch("media/img/birds/BirdsOfParadise2.svg")
        .then(response => response.text())
        //.then(xmlString => (new DOMParser()).parseFromString(xmlString, "text/xml"))
        .then(data => this.setState({svg: data}));
         

    };

    

    render() {  
        return <div className="Image-component" dangerouslySetInnerHTML={{ __html: this.state.svg }} />
    };

};

export default ImageComponent;