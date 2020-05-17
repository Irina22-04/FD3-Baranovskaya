import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';


class Br2jsx extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        let myText = this.props.text.replace(/<br\s?\/?>/g, ' <br/> ');

        const arrayText = myText.split(' ');

        const result = arrayText.map((item, index) => {
            return (item === '<br/>' ? <br key={index}/> : <React.Fragment key={index}>{item}</React.Fragment>);
        });

        return (
            <div className={'br2jsx'}>
                {result}
            </div>
        );
    }
}

export default Br2jsx;