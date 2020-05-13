import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

class Card extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className={'card'}>

                <div className={'cardTitle'}>{this.props.productName}</div>
                <div>Цена: <span>{`${this.props.price} рублей`}</span></div>
                <div>Изображение: <span>{this.props.photo}</span></div>
                <div>Количество: <span>{this.props.count}</span></div>

            </div>
        )
    }
}

export default Card;