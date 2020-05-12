import React from 'react';
import PropTypes from 'prop-types';

import '../ishop.css';

class Product extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        cbMakeChosen: PropTypes.func,
        isSelected: PropTypes.bool,
        cbDeleteProduct: PropTypes.func,
        cbMakeEdited: PropTypes.func,
        isEdited: PropTypes.bool,
    };

    makeChosen = (EO) => {

        if (!this.props.isMadeChangeProduct) {
            let isEdited = false;
            if (EO.target.value === 'Edit') {
                isEdited = true;
            }
            const choosenProduct = {
                code: this.props.code,
                productName: this.props.productName,
                price: this.props.price,
                photo: this.props.photo,
                count: this.props.count,
            };
            this.props.cbMakeChosen(choosenProduct, isEdited);
        }
    };

    deleteClick = () => {
        this.props.cbDeleteProduct(this.props.code, this.props.productName);
    };

    render() {

        return (
            < div className={this.props.isSelected ? 'product selected' : 'product'}
                  onClick={this.makeChosen}
                  id={this.props.code}>

                <div className={'productName'}>
                    {this.props.productName}
                </div>

                <div className={'price'}>
                    {this.props.price}
                </div>

                <div className={'productImage'}
                     style={{backgroundImage: `url(${this.props.photo})`}}>
                </div>

                <div className={'count'}>
                    {this.props.count}
                </div>

                <div className={'control'}>
                    <input
                        className={'controlProduct'}
                        type={'button'}
                        value={'Edit'}
                        //onClick={this.makeEdit}
                        disabled={this.props.isMadeChangeProduct}
                    />
                    <input
                        className={'controlProduct'}
                        type={'button'}
                        value={'Delete'}
                        onClick={this.deleteClick}
                        disabled={this.props.isEdited}
                    />
                </div>

            </div>
        )
    }
}

export default Product;