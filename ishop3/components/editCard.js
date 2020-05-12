import React from 'react';
import PropTypes from 'prop-types';

import './editCard.css';

class EditCard extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    };

    state = {
        code: this.props.code,
        productName: this.props.productName,
        price: this.props.price,
        photo: this.props.photo,
        count: this.props.count,

        errText: {
            productName: '',
            price: '',
            photo: '',
            count: '',
        }
    };

    editProduct = (EO) => {
        const field = EO.target.className.slice(5);
        const value = EO.target.value.trim();
        this.setState({
            [field]: value,
        }, this.checkField(value, field))
    };

    checkField(value, field) {

        if (!value) {
            this.setState({
                errText: {...this.state.errText, [field]: 'Поле'}
            })
        } else {
            this.setState({
                errText: {...this.state.errText, [field]: ''}
            })
        }
    }

    render() {
        return (
            <div className={'card'}>
                <div className={'cardTitle'}>Внесение изменений в товар</div>
                <div>ID:
                    <span>
                        {this.state.code}
                    </span>
                </div>
                <div>
                    <label>Товар:
                        <input className={'card-productName'} type='text' defaultValue={this.state.productName}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.productName}</div>
                </div>
                <div>
                    <label>Цена:
                        <input className={'card-price'} type='text' defaultValue={this.state.price}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.price}</div>
                </div>
                <div>
                    <label>Изображение:
                        <input className={'card-photo'} type='text' defaultValue={this.state.photo}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.photo}</div>
                </div>
                <div>
                    <label>Количество:
                        <input className={'card-count'} type='text' defaultValue={this.state.count}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.count}</div>
                </div>


                <input className={'controlEdit'} type="button" value={'Save'}/>
                <input className={'controlEdit'} type="button" value={'Cancel'}/>
            </div>
        )
    }
}

export default EditCard;