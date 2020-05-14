import React from 'react';
import PropTypes from 'prop-types';

import './editCard.css';

class EditCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code,
            productName: this.props.productName,
            price: this.props.price,
            photo: this.props.photo,
            count: this.props.count,

            errText: {
                productName: this.props.isCreateNewProduct ? 'Введите наименование' : '',
                price: this.props.isCreateNewProduct ? 'Введите цену товара' : '',
                photo: this.props.isCreateNewProduct ? 'Введите адрес ссылки на фото товара' : '',
                count: this.props.isCreateNewProduct ? 'Укажите количество товара' : '',
            }
        }
    }

    static propTypes = {
        code: PropTypes.number.isRequired,
        productName: PropTypes.string,
        price: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        photo: PropTypes.string,
        count: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        cbSaveEdit: PropTypes.func.isRequired,
        cbMadeChengeProduct: PropTypes.func.isRequired,
        cbCancelEdit: PropTypes.func,
        isCreateNewProduct: PropTypes.bool,
        cbSaveNewProduct: PropTypes.func,
        cbCancelSaveNewProduct: PropTypes.func,
    };
    
    componentDidUpdate(prevProps) {
        if (this.props.code !== prevProps.code) {
            this.setState({
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
            })
        }
    }

    editProduct = (EO) => {
        const field = EO.target.className.slice(5);
        const value = EO.target.value;

        this.checkField(value, field);
        this.props.cbMadeChengeProduct(true);
    };

    checkField(value, field) {
        let isValidValue = true;
        switch (field) {
            case 'price':
            case 'count':
                isValidValue = this.checkNumberField(value);
                value = isValidValue ? Number(value) : value;
                break;
            case 'photo':
                isValidValue = this.checkPhotoField(value);
                break;
        }

        const message = value && isValidValue ? '' : 'Поле заполнено неверно';

        this.setState({
            [field]: value,
            errText: {...this.state.errText, [field]: message}
        })
    }

    checkPhotoField = (value) => {
        const reg = /(.jpg|.png|jpeg)$/;
        return reg.test(value);
    };

    checkNumberField = (value) => {
        return !isNaN(Number(value));
    };

    saveEdit = () => {

        const newProduct = {
            code: this.state.code,
            productName: this.state.productName,
            price: this.state.price,
            photo: this.state.photo,
            count: this.state.count,
        };

        this.props.cbMadeChengeProduct(false);
        if (this.props.isCreateNewProduct) {
            return this.props.cbSaveNewProduct(newProduct);
        }
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
        });
        if (this.props.isCreateNewProduct) {
            this.props.cbCancelSaveNewProduct()
        }
    };

    render() {

        const canSave = !Object.values(this.state.errText).every(item => {
            return item === '';
        });
        const phrase = this.props.isCreateNewProduct ? 'Внесение нового товара' : 'Внесение изменений в товар';

        return (
            <div className={'card'}>
                <div className={'cardTitle'}>{phrase}</div>
                <div>ID:&nbsp;
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
                        <input className={'card-price'} type='text' value={`${this.state.price}`}
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