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
    };

    makeChosen = () => {
        this.props.cbMakeChosen(this.props.code);
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
                     style={{backgroundImage: `url(${this.props.photo})`}} >
                </div>

                <div className={'count'}>
                    {this.props.count}
                </div>

                <div className={'control'}>
                    <input
                        type={'button'}
                        value={'Delete'}
                        onClick={this.deleteClick}
                    />
                </div>

            </div>
        )
    }
}

export default Product;