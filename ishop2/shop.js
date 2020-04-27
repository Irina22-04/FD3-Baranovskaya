const Shop = React.createClass({

    displayName: 'shop',

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

    deleteClick: function(numb) {
        const answer = confirm('Вы хотите удалить товар?');
        return answer ? this.deleteProduct(numb) : null;
    },

    deleteProduct: function(numb) {
      this.setState({
          goods: this.state.goods.filter(product => {
              return product.code !== numb;
          })
      })
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
                cbDeleteClick: () => this.deleteClick(product.code),
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