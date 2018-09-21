import React, {Component} from 'react'

class TabSubComponent extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.activeTab == this.props.thisTab) {
            this.state = {
                activeTab: true,
            };
        }
        else {
            this.state = {
                activeTab: false,
            };

        }
        /*
        console.log("props.activeTab: " + this.props.activeTab);
        console.log("state.thisTab: " + this.state.thisTab);
        console.log("state.activeTab: " + this.state.activeTab);
        */
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({
            activeTab: true
        });
        this.props.changeTab(this.props.thisTab)
        //console.log(this.state.activeTab);
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        return (
            <button onClick={this.handleClick} name="btnTab1" type="button">Tab {this.state.thisTab}</button>
        );
    }
}

export default TabSubComponent;
