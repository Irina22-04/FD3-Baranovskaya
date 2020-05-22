import React from 'react';

import './showCard.css';

function ShowCard(props) {
    return (<div
        className={'card'}
        style={{backgroundPosition: `${33.5 * (props.horisontal - 1)}% ${7.7 * (props.vertical - 1)}%`}}
    />)
}

export default ShowCard;