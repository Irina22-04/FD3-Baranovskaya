import React from 'react';
import PropTypes from 'prop-types';

import './doubleButton.css';

class doubleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    };

    cbPressedButton1 = () => {
        const val = `${this.props.caption1} ${this.props.children}`;
        return this.props.cbPressed(val);
    };

    cbPressedButton2 = () => {
        const val = `${this.props.children} ${this.props.caption2}`;
        return this.props.cbPressed(val);
    };

    render(){
        return (
            <React.Fragment>
                <input type={'button'} value={this.props.caption1} onClick={this.cbPressedButton1}/>
                {this.props.children}
                <input type={'button'} value={this.props.caption2} onClick={this.cbPressedButton2}/>
            </React.Fragment>
        )
    }

}

export default doubleButton;