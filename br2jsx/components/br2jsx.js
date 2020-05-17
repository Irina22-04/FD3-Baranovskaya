import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';
import BrComponent from './brComponent';

class Br2jsx extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        const arrayText = this.props.text.split(/< *\/? *br *\/? *>/g);

        const result = arrayText.map((item, index) => {
            return (<BrComponent
            key={index}
            text={item}
            />
        )
        });

        return (
            <div>
            {result}
            </div>
    );
    }
}

export default Br2jsx;