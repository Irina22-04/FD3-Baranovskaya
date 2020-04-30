const Filter = React.createClass({

    displayName: 'filter',

    propTypes: {
        words: React.PropTypes.arrayOf(React.PropTypes.string),
    },

    getInitialState: function () {
        return {
            words: this.props.words.slice(),
            isSorted: false,
            findStr: '',
        };
    },

    createNewWords: function () {
        let newFilteredWords;
        if (!this.state.findStr.replace(/\s/g, '')) {
            newFilteredWords = this.props.words.slice();
        } else {
            newFilteredWords = [];
            this.props.words.forEach(word => {
                if (word.includes(this.state.findStr)) {
                    newFilteredWords.push(word);
                }
            });
        }

        newFilteredWords = this.state.isSorted ? newFilteredWords.sort() : newFilteredWords;

        this.setState({
            words: newFilteredWords,
        });
    },

    sortWords: function () {
        const newIsSorted = !this.state.isSorted;
        this.setState({
            isSorted: newIsSorted,
        }, this.createNewWords);
    },

    filterWords: function (EO) {
        let str = EO.target.value;
        this.setState({
            findStr: str,
        }, this.createNewWords);
    },

    clearFilter: function () {
        this.setState({
            words: this.props.words.slice(),
            isSorted: false,
            findStr: '',
        })
    },


    render: function () {
        const wordsCode = this.state.words.map((word, index) => {
            return React.DOM.div({key: index, className: 'word'}, word);
        });

        return React.DOM.div({className: 'wordsDiv'},
            React.DOM.input({type: 'checkbox', checked: this.state.isSorted, onChange: this.sortWords}),
            React.DOM.input({type: 'text', onChange: this.filterWords, value: this.state.findStr}),
            React.DOM.input({type: 'button', value: 'сброс', onClick: this.clearFilter}),
            React.DOM.div({className: 'wordList'}, wordsCode)
        )
    },
});