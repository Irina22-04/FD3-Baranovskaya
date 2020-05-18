import React from 'react';
import PropTypes from 'prop-types';

import './rainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    render() {

        let frame = this.props.children;

        this.props.colors.forEach(item => {
            frame = (<div style={{border: "solid 7px " + item, padding: "10px"}}>
                    {frame}
                </div>
            )
        });

        return (
            <React.Fragment>
                {frame}
            </React.Fragment>
        );
    }
}

export default RainbowFrame;
