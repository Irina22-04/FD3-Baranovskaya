const GoodsTable = React.createClass({

    displayName: 'goodsTable',

    render: function () {

        const goodsTableCode = [];
        for (let i = 0; i< this.props.goods.length; i++) {
            const product = this.props.goods[i];
            const productCode =
                React.DOM.div({key: product.code, className: 'Product'},
                    React.DOM.div({className: 'ProductName'}, product.name),
                    React.DOM.div({className: 'Price'}, product.price),
                    React.DOM.div({className: 'ProductImage', style: {backgroundImage: `url(${product.photo})`}}),
                    React.DOM.div({className: 'Count'}, product.count)
                );
            goodsTableCode.push(productCode);
        }
        return React.DOM.div({className: 'GoodsTable'},
            React.DOM.div({className: 'ProductHeader'},
                React.DOM.div({className: 'ProductName Header'}, this.props.headersTable.name),
                React.DOM.div({className: 'Price Header'}, this.props.headersTable.price),
                React.DOM.div({className: 'ProductImage Header'}, this.props.headersTable.photo),
                React.DOM.div({className: 'Count Header'}, this.props.headersTable.count)
            ),
            React.DOM.div({className: 'Goods'}, goodsTableCode),
        );
    },

});