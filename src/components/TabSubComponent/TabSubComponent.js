import React, {Component} from 'react';
import './TabSubComponent.css';

class TabSubComponent extends Component {
  //This is a child of tab component

    thisTab;

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // Tells tab component when this tab is clicked
    handleClick() {
        this.props.changeTab(this.props.thisTab)
    }

    // Renders a tab
    render() {
        return (
            <button className="tab-button" onClick={this.handleClick} name="btnTab1" type="button" >Tab {this.props.thisTab}</button>
        );
    }
}

export default TabSubComponent;
