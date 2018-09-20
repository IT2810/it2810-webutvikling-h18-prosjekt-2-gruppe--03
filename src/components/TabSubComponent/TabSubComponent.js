import React, {Component} from 'react';
import './TabSubComponent.css';

class TabSubComponent extends Component {
    thisTab;

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changeTab(this.props.thisTab) // Calls a function in TabComponent
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        return (
            <button className="tab-button" onClick={this.handleClick} name="btnTab1" type="button" >Tab {this.props.thisTab}</button>
        );
    }
}

export default TabSubComponent;
