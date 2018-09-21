import React, {Component} from 'react'
import CategoryComponent from '../CategoryComponent/CategoryComponent.js';
import TabComponent from "../TabComponent/TabComponent.js"
import MediaComponent from "../MediaComponent/MediaComponent.js"
import './GalleryComponent.css';

class GalleryComponent extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1,
            imageCategory: "", textCategory: "", soundCategory: "",
            shouldGenerateNewExhibition: false
        };
        this.getActiveTab = this.getActiveTab.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }

    getActiveTab(newActiveTab) {
        this.setState({
            activeTab: newActiveTab,
            shouldGenerateNewExhibition: false
        });
    }

    getCategories(newCategories) {
        this.setState({
            imageCategory: newCategories[0],
            textCategory: newCategories[1],
            soundCategory: newCategories[2],
            shouldGenerateNewExhibition: true
        });
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
                                soundCategory={this.state.soundCategory}
                                shouldGenerateNewExhibition={this.state.shouldGenerateNewExhibition} />
            </div>
        );
    }
}

export default GalleryComponent;
