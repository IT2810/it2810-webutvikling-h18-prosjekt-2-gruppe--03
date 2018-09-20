import React, {Component} from 'react'
import TabSubComponent from "../TabSubComponent/TabSubComponent.js"
import './TabComponent.css';

// This is a child of GalleryComponent and the parent of 4 TabSubComponents
class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 1};
        this.changeTab = this.changeTab.bind(this);
    }

    // Updates active state here and in GalleryComponent when a tab is clicked
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
