import React from 'react';
import PropTypes from 'prop-types';

class BrComponent extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {

        return (
            <React.Fragment>
            {this.props.text}
            <br />
            </React.Fragment>
    );
    }
}

export default BrComponent;