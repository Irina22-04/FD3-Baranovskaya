const Product = React.createClass({
    displayName: 'product',

    makeChosen: function (EO) {
        const isSelected = Number(EO.currentTarget.id);
        this.props.cbMakeChosen(isSelected);
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
                React.DOM.input({type: 'button', value: 'Delete', onClick: this.props.cbDeleteClick})
            ))
    }
});