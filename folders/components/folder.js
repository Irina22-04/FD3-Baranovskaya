import React from 'react';
import PropTypes from 'prop-types';
import {EventEmitter} from 'events';
import './folder.css';

export let myEvents=new EventEmitter();

export class Folder extends React.Component {

    static propTypes = {
        tree: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
            children: PropTypes.array,
        }),
    };

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        };
    }

    checkArrow = () => {
        const {tree: {children}} = this.props;
        return (children && children.length > 0) ? this.createArrow() : null;
    };

    createArrow = () => {
        const {isSelected} = this.state;
        const arrowClass = isSelected ? 'arrow open-arrow' : 'arrow';
        return <div className={arrowClass} onClick={this.switchSelect}/>
    };

    switchSelect = () => {
        const {isSelected} = this.state;
        this.setState({
            isSelected: !isSelected,
        });
        myEvents.emit('changeFiles', this.props.tree.children, isSelected);
    };

    showChildren = () => {
        const {isSelected} = this.state;
        if (!isSelected) {
            return null;
        }

        const {tree: {children}} = this.props;
        if (!children || children.length === 0) {
            return null;
        }

        const folders = children
            .filter(item => item.type === 'FOLDER')
            .map(child => <Folder key={child.name} tree={child}/>);
        return folders;
    };

    render() {

        return (
            <div className={"folder"}>
                <div className={"name-wrapper"}>
                    {this.checkArrow()}
                    <div className={"folder-image"}/>
                    {this.props.tree.name}
                </div>
                <div className={"folders-wrapper"}>
                {this.showChildren()}
                </div>
            </div>
        );
    }
}