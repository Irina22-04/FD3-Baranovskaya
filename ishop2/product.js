const Product = React.createClass({
    displayName: 'product',

    makeChosen: function () {
        this.props.cbMakeChosen(this.props.code);
    },

    deleteClick: function () {
        const answer = confirm(`Вы хотите удалить товар '${this.props.productName}'?` );
        return answer ? this.props.cbDeleteProduct(this.props.code) : null;
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