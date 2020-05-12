import React from 'react';
import PropTypes from 'prop-types';

import '../ishop.css';
import Product from './product.js';
import Card from './card.js';
import EditCard from './editCard.js';

class Shop extends React.Component {

    static propTypes = {
        headersTable: PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
            control: PropTypes.string.isRequired,
        }),
        goods: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                photo: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        )
    };

    state = {
        goods: this.props.goods.slice(),
        isSelected: null,
        showCard: null,
        isEdited: null,
    };

    makeChosen = (code, productName, price, photo, count) => {
        this.setState({
            isSelected: code,
            showCard: {code, productName, price, photo, count},
        })
    };

    makeEdited = (code, productName, price, photo, count) => {
        this.setState({
            isEdited: true,
            isSelected: code,
            showCard: {code, productName, price, photo, count},
        })
    };

    deleteProduct = (numb, name) => {
        this.setState({
                isSelected: numb,
            },
            () => setTimeout(() => {        //setTimeout used for Chrome
                const answer = confirm(`Вы хотите удалить товар '${name}'?`);
                if (answer) {
                    this.setState({
                        goods: this.state.goods.filter(product => {
                            return product.code !== numb;
                        }),
                        showCard: null,
                    })
                }
            }, 0)
        )
    };

    render() {

        const goodsTableCode = this.state.goods.map(product => {
            return (
                <Product
                    key={product.code}
                    code={product.code}
                    productName={product.name}
                    price={product.price}
                    photo={product.photo}
                    count={product.count}
                    cbMakeChosen={this.makeChosen}
                    isSelected={product.code === this.state.isSelected}
                    cbDeleteProduct={this.deleteProduct}
                    cbMakeEdited={this.makeEdited}
                >
                </Product>
            )
        });

        const divCard = (this.state.showCard&&!this.state.isEdited) ? <Card
            code={this.state.showCard.code}
            productName={this.state.showCard.productName}
            price={this.state.showCard.price}
            photo={this.state.showCard.photo}
            count={this.state.showCard.count}
        /> : null;

        const divEditCard = this.state.isEdited ? <EditCard
            code={this.state.showCard.code}
            productName={this.state.showCard.productName}
            price={this.state.showCard.price}
            photo={this.state.showCard.photo}
            count={this.state.showCard.count}
        /> : null;

        return (
            <div className={'iShop'}>
            <div className={'shop'}>
                <div className={'productHeader'}>
                    <div className={'productName header'}>
                        {this.props.headersTable.name}
                    </div>

                    <div className={'price header'}>
                        {this.props.headersTable.price}
                    </div>

                    <div className={'productImage header'}>
                        {this.props.headersTable.photo}
                    </div>

                    <div className={'count header'}>
                        {this.props.headersTable.count}
                    </div>

                    <div className={'control header'}>
                        {this.props.headersTable.control}
                    </div>
                </div>

                <div className={'goods'}>
                    {goodsTableCode}
                </div>

            </div>
                {divCard}
                {divEditCard}
            </div>


        )
    }
}

export default Shop;