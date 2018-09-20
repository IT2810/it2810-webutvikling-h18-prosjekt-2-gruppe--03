import React, {Component} from 'react'
import TabSubComponent from "../TabSubComponent/TabSubComponent.js"
import './TabComponent.css';

class TabComponent extends Component {
  //This is a child of gallery component and a parent to 4 tab sub-components

    constructor(props) {
        super(props);
        this.state = {activeTab: 1};
        this.changeTab = this.changeTab.bind(this);
    }

    // Updates active state here and in gallery component when a tab is clicked
    changeTab(newActiveTab) {
        if (this.state.activeTab !== newActiveTab) {
            this.setState({activeTab: newActiveTab});
            this.props.getActiveTab(newActiveTab); // Calls a function in Gallery
        }
    }

    // Renders 4 tabs
    render() {
        return (
            <div className="Tab-component">
                <TabSubComponent activeTab={this.state.activeTab} thisTab={1} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={2} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={3} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={4} changeTab={this.changeTab} />
            </div>
        );
    }
}

export default TabComponent;
