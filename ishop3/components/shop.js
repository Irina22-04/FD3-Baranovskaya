import React from 'react';
import PropTypes from 'prop-types';

import '../ishop.css';
import Product from './product.js';
import Card from './card.js';
import EditCard from './editCard.js';

class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goods: this.props.goods.slice(),
            isSelected: null,
            showCard: null,
            isEdited: false,
            isMadeChangeProduct: false,
            isCreateNewProduct: false,
        }
    }

    static propTypes = {
        headersTable: PropTypes.shape({
            productName: PropTypes.string.isRequired,
            price: PropTypes.string,
            photo: PropTypes.string.isRequired,
            count: PropTypes.string,
            control: PropTypes.string.isRequired,
        }),
        goods: PropTypes.arrayOf(
            PropTypes.shape({
                productName: PropTypes.string.isRequired,
                price: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string,
                ]),
                photo: PropTypes.string.isRequired,
                count: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string,
                ]),
            })
        )
    };

    makeChosen = (product, isEdited) => {
        this.setState({
            isEdited: isEdited,
            isSelected: product.code,
            showCard: {...product},
        })
    };

    madeChangeProduct = (val) => {
        this.setState({
            isMadeChangeProduct: val,
        })
    };

    cancelEdit = () => {
        this.setState({
            isEdited: false,
        })
    };

    cancelSaveNewProduct = () => {
        this.setState({
            isSelected: null,
            showCard: null,
            isCreateNewProduct: false,
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

    saveEdit = (newProduct) => {

        const newGoodsList = this.state.goods.map(product => {
            return product.code === newProduct.code ? newProduct : product;
        });

        this.setState({
            goods: newGoodsList,
            isEdited: false,
            isSelected: newProduct.code,
            showCard: {...newProduct},
            isMadeChangeProduct: false,
        })
    };

    createNewProduct = () => {
        const newCode = this.state.goods.length + 1;
        const newProduct = {
            code: newCode,
            productName: '',
            price: '',
            photo: '',
            count: '',
        };
        this.setState({
            isSelected: null,
            showCard: {...newProduct},
            isEdited: true,
            isCreateNewProduct: true,
        })
    };

    saveNewProduct = (newProduct) => {

        this.setState({
            goods: [...this.state.goods, newProduct],
            isSelected: newProduct.code,
            showCard: {...newProduct},
            isEdited: false,
            isCreateNewProduct: false,
            isMadeChangeProduct: false,
        })
    };

    render() {

        const goodsTableCode = this.state.goods.map(product => {
            return (
                <Product
                    key={product.code}
                    code={product.code}
                    productName={product.productName}
                    price={product.price}
                    photo={product.photo}
                    count={product.count}
                    cbMakeChosen={this.makeChosen}
                    isSelected={product.code === this.state.isSelected}
                    cbDeleteProduct={this.deleteProduct}
                    cbMakeEdited={this.makeEdited}
                    isMadeChangeProduct={this.state.isMadeChangeProduct}
                    isEdited={this.state.isEdited}
                >
                </Product>
            )
        });

        const divCard = (this.state.showCard && !this.state.isEdited) ? <Card
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
            cbSaveEdit={this.saveEdit}
            cbMadeChengeProduct={this.madeChangeProduct}
            cbCancelEdit={this.cancelEdit}
            isCreateNewProduct={this.state.isCreateNewProduct}
            cbSaveNewProduct={this.saveNewProduct}
            cbCancelSaveNewProduct={this.cancelSaveNewProduct}
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
                <input className={'product-button'} type={'button'} value={'New product'} disabled={this.state.isEdited} onClick={this.createNewProduct}/>
                {divCard}
                {divEditCard}
            </div>
        )
    }
}

export default Shop;