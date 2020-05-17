import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';


class Br2jsx extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {

        const arrayText = this.props.text.split(/<br\s?\/?>/g,);
        const dataLength = arrayText.length;
        const result = [];

        arrayText.forEach((item, index) => {
            result.push(item);
            if (index !== dataLength - 1) {
                result.push(<br/>)
            }
        });

        return (
            <div className={'br2jsx'}>
                {result}
            </div>
        );
    }
}

export default Br2jsx;