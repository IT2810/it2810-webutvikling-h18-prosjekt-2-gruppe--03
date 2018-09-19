import React, {Component} from 'react'
import CategoryComponent from '../CategoryComponent/CategoryComponent.js';
import TabComponent from "../TabComponent/TabComponent.js"
import MediaComponent from "../MediaComponent/MediaComponent.js"
import './GalleryComponent.css';

class GalleryComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1, imageCategory: "", textCategory: "", soundCategory: "",
        };
        this.getActiveTab = this.getActiveTab.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }

    getActiveTab(newActiveTab) {
        console.log("newActiveTab: " + newActiveTab);
        this.setState({
            activeTab: newActiveTab,
        });
        console.log("activeTab: " + this.state.activeTab);
    }

    getCategories(newCategories) {
        console.log("newCategories: " + newCategories);
        this.setState({
            imageCategory: newCategories[0],
            textCategory: newCategories[1],
            soundCategory: newCategories[2],
        });
        console.log("categories: " + this.state.imageCategory + ", " + this.state.textCategory + ", " + this.state.soundCategory);
    }

    // Renders gallery text if it exist, if not, shows the welcome text
    render() {
        return (
            <div className="Gallery-component">
                <TabComponent getActiveTab={this.getActiveTab} />
                <CategoryComponent getCategories={this.getCategories} />
                <MediaComponent activeTab={this.state.activeTab}
                                imageCategory={this.state.imageCategory}
                                textCategory={this.state.textCategory}
                                soundCategory={this.state.soundCategory} />
            </div>
        );
    }
}

export default GalleryComponent;
