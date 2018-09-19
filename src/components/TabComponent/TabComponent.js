import React, {Component} from 'react'
import TabSubComponent from "../TabSubComponent/TabSubComponent.js"

class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
        };
        this.changeTab = this.changeTab.bind(this);
    }


    changeTab(newActiveTab) {
        //console.log("newActiveTab: " + newActiveTab);
        if (this.state.activeTab != newActiveTab) {
            this.setState({
                activeTab: newActiveTab,
            });
            this.props.getActiveTab(this.state.activeTab); // This calls a function in Gallery
        }

        //console.log("activeTab: " + this.state.activeTab);
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        return (
            <div>
                <TabSubComponent activeTab={this.state.activeTab} thisTab={1} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={2} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={3} changeTab={this.changeTab} />
                <TabSubComponent activeTab={this.state.activeTab} thisTab={4} changeTab={this.changeTab} />
            </div>
        );
    }
}

export default TabComponent;
