import React, {Component} from 'react';
import './TabSubComponent.css';

// This is a child of tab component
class TabSubComponent extends Component {
    thisTab;

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Tells tab component when this tab is clicked
    handleClick() {
        this.props.changeTab(this.props.thisTab);
    }

    // Renders a tab
    render() {
        return (
            <button className={"Tab-button" + ((this.props.activeTab === this.props.thisTab) ? " active" : "")}
                    onClick={this.handleClick} type="button">Tab {this.props.thisTab}</button>
        );
    }
}

export default TabSubComponent;
