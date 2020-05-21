import React from 'react';
import PropTypes from 'prop-types';

import './showCard.css';

class ShowCard extends React.Component {

    static propTypes = {
        horisontal: PropTypes.number,
        vertical: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {
            horisontal: this.props.horisontal,
            vertical: this.props.vertical,
    }
    }

    componentDidUpdate(prevProps) {
        if (this.props.horisontal !== prevProps.horisontal || this.props.vertical !== prevProps.vertical) {
            this.setState({
                horisontal: this.props.horisontal,
                vertical: this.props.vertical,
            });
        }
    }

    render() {
        const horisontalValue = 33.5 * (this.state.horisontal - 1);
        const verticalValue = 7.7 * (this.state.vertical - 1);
        return (
            <div className={'card'} style={{backgroundPosition: `${horisontalValue}% ${verticalValue}%`}}/>
        );
    }
}

export default ShowCard;