const Shop = React.createClass({

    displayName: 'shop',

    propTypes: {
        headersTable: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.string.isRequired,
            photo: React.PropTypes.string.isRequired,
            count: React.PropTypes.string.isRequired,
            control: React.PropTypes.string.isRequired,
        }),
        goods: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired,
                photo: React.PropTypes.string.isRequired,
                count: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function () {
        return {
            goods: this.props.goods.slice(),
            isSelected: null,
        }
    },

    makeChosen: function (numb) {
        this.setState({
            isSelected: numb,
        })
    },

    deleteProduct: function (numb, name) {
        this.setState({
                isSelected: numb,
            },
            () => setTimeout(() => {        //setTimeout used for Chrome
                    const answer = confirm(`Вы хотите удалить товар '${name}'?`);
                    if (answer) {
                        this.setState({
                            goods: this.state.goods.filter(product => {
                                return product.code !== numb;
                            })
                        })
                    }
                }, 0)
        )
    },

    render: function () {

        const goodsTableCode = this.state.goods.map(product => {
            return React.createElement(Product, {
                key: product.code,
                code: product.code,
                productName: product.name,
                price: product.price,
                photo: product.photo,
                count: product.count,
                cbMakeChosen: this.makeChosen,
                isSelected: product.code === this.state.isSelected,
                cbDeleteProduct: this.deleteProduct,
            })
        });

        return React.DOM.div({className: 'shop'},
            React.DOM.div({className: 'productHeader'},
                React.DOM.div({className: 'productName header'}, this.props.headersTable.name),
                React.DOM.div({className: 'price header'}, this.props.headersTable.price),
                React.DOM.div({className: 'productImage header'}, this.props.headersTable.photo),
                React.DOM.div({className: 'count header'}, this.props.headersTable.count),
                React.DOM.div({className: 'control header'}, this.props.headersTable.control)
            ),
            React.DOM.div({className: 'goods'}, goodsTableCode),
        );
    },

});