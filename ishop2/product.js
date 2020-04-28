const Product = React.createClass({
    displayName: 'product',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        productName: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        photo: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        cbMakeChosen: React.PropTypes.func,
        isSelected: React.PropTypes.bool,
        cbDeleteProduct: React.PropTypes.func,
    },

    makeChosen: function () {
        this.props.cbMakeChosen(this.props.code);
    },

    deleteClick: function () {
        this.props.cbDeleteProduct(this.props.code, this.props.productName);
    },

    render: function () {

        return React.DOM.div({
                className: this.props.isSelected ? 'product selected' : 'product',
                onClick: this.makeChosen,
                id: this.props.code
            },
            React.DOM.div({className: 'productName'}, this.props.productName),
            React.DOM.div({className: 'price'}, this.props.price),
            React.DOM.div({className: 'productImage', style: {backgroundImage: `url(${this.props.photo})`}}),
            React.DOM.div({className: 'count'}, this.props.count),
            React.DOM.div({className: 'control'},
                React.DOM.input({type: 'button', value: 'Delete', onClick: this.deleteClick})
            ))
    }
});