import React from 'react';
import {EventEmitter} from 'events';

import './treeContainer.css';
import {Folder, myEvents} from './folder.js';
import File from './file.js';


class TreeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
        };
    }

    componentDidMount() {
        myEvents.addListener('changeFiles', this.selectFiles);
    };

    componentWillUnmount() {
        myEvents.removeListener('changeFiles', this.selectFiles);
    };

    selectFiles = (children, isSelected) => {

        const selectedFiles = isSelected ? null : children;

        this.setState({
            selectedFiles: selectedFiles,
        })
    };

    showFiles = () => {
        const {selectedFiles} = this.state;
        if (!selectedFiles) {
            return null;
        }
        const files = selectedFiles
            .filter(item => item.type === 'FILE')
            .map(child => <File key={child.name} file={child}/>);
        return files;
    };

    render() {
        return (
            <div className={"tree-container"}>
                <div className={"folders"}>
                    <Folder tree={this.props.tree}/>
                </div>

                <div className={"files"}>
                    {this.showFiles()}
                </div>

            </div>
        );
    }

}

export default TreeContainer;