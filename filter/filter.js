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

    sortWords: function () {
        const newIsSorted = !this.state.isSorted;
        let newWords
        switch (newIsSorted) {
            case true:
                newWords = this.state.words.sort();
                break;
            default:
                newWords = [];
                this.props.words.forEach(word => {
                    if (word.includes(this.state.findStr)) {
                        newWords.push(word);
                    }
                });

        }

        this.setState({
            isSorted: newIsSorted,
            words: newWords,
        });
    },

    filterWords: function (EO) {
        let str = EO.target.value;
        let newFilteredWords = [];
        this.props.words.forEach(word => {
            if (word.includes(str)) {
                newFilteredWords.push(word);
            }
        });

        newWordArr = this.state.isSorted ? newFilteredWords.slice().sort() : newFilteredWords.slice();

        this.setState({
            words: newWordArr,
            findStr: str,
        })
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