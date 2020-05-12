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
        cbSaveEdit: PropTypes.func.isRequired,
        cbMadeChengeProduct: PropTypes.func.isRequired,
        cbCancelEdit: PropTypes.func,
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

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.setState({
    //         code: nextProps.code,
    //         productName: nextProps.productName,
    //         price: nextProps.price,
    //         photo: nextProps.photo,
    //         count: nextProps.count,
    //
    //         errText: {
    //             productName: '',
    //             price: '',
    //             photo: '',
    //             count: '',
    //         }
    //     })
    // }

    editProduct = (EO) => {
        const field = EO.target.className.slice(5);
        const value = EO.target.value.trim();
        this.props.cbMadeChengeProduct(true);
        this.setState({
            [field]: value,
        }, this.checkField(value, field))
    };

    checkField(value, field) {

        if (!value) {
            this.setState({
                errText: {...this.state.errText, [field]: 'Поле заполнено неверно'}
            })
        } else {
            this.setState({
                errText: {...this.state.errText, [field]: ''}
            })
        }
    }

    saveEdit = () => {

        const newProduct = {
            code: this.state.code,
            productName: this.state.productName,
            price: this.state.price,
            photo: this.state.photo,
            count: this.state.count,
        };

        this.props.cbMadeChengeProduct(true);
        this.props.cbSaveEdit(newProduct);
    };

    cancelEdit = () => {
        this.props.cbMadeChengeProduct(false);
        this.props.cbCancelEdit();
        this.setState({
            code: this.props.code,
            productName: this.props.productName,
            price: this.props.price,
            photo: this.props.photo,
            count: this.props.count,
        })
    };

    render() {
        const canSave = !Object.values(this.state.errText).every(item => {
            return item === '';
        });

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
                        <input className={'card-productName'} type='text' value={this.state.productName}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.productName}</div>
                </div>
                <div>
                    <label>Цена:
                        <input className={'card-price'} type='text' value={this.state.price}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.price}</div>
                </div>
                <div>
                    <label>Изображение:
                        <input className={'card-photo'} type='text' value={this.state.photo}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.photo}</div>
                </div>
                <div>
                    <label>Количество:
                        <input className={'card-count'} type='text' value={this.state.count}
                               onChange={this.editProduct}/>
                    </label>
                    <div className={'errDiv'}>{this.state.errText.count}</div>
                </div>


                <input className={'controlEdit'} type="button" value={'Save'} disabled={canSave}
                       onClick={this.saveEdit}/>
                <input className={'controlEdit'} type="button" value={'Cancel'} onClick={this.cancelEdit}/>
            </div>
        )
    }
}

export default EditCard;