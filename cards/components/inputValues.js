import React from 'react';
import './inputValues.css';

import ShowCard from "./showCard";

class InputValues extends React.Component {

    constructor() {
        super();
        this.horisontalInput = React.createRef();
        this.verticalInput = React.createRef();

        this.state = {
            horisontal: '',
            vertical: '',

            errMessage: {
                horisontal: 'Enter value',
                vertical: 'Enter value',
            },

            showCard: {
                horisontal: 0,
                vertical: 0,
            }
        }
    }

    changeValue = (EO) => {
        const field = EO.target.getAttribute('data-horisontal') ? 'horisontal' : 'vertical';
        const [newValue, errMessage] = this.checkValue(EO.target.value, field);

        this.setState({
            [field]: newValue,
            errMessage: {...this.state.errMessage, [field]: errMessage}
        })
    };

    checkValue(value, field) {
        let newValue;
        let errMessage;
        if (value === '') {
            newValue = '';
            errMessage = 'Enter value';
        } else if (!isNaN(Number(value))) {
            newValue = Number(value);
            errMessage = this.checkNumberValue(value, field);
        } else {
            newValue = value;
            errMessage = 'Enter correct value';
        }

        return [newValue, errMessage];
    }

    checkNumberValue(value, field) {
      let errMessage;

      if (value <= 0) {
          errMessage = 'Value must be greater than 0';
      } else if (field === 'horisontal' && value > 4) {
          errMessage = 'Value must be less than 4';
      } else if (field === 'vertical' && value > 14) {
          errMessage = 'Value must be less than 14';
      } else {
          errMessage = '';
      }

      return errMessage;
    };

    showCard = () => {
      this.setState({
          showCard: {...this.state.showCard, horisontal: this.state.horisontal, vertical: this.state.vertical}
      })
    };

    showQueenSpades = () => {
        this.setState({
            horisontal: 1,
            vertical: 11,
            showCard: {...this.state.showCard, horisontal: 1, vertical: 11},
            errMessage: {...this.state.errMessage, horisontal: '', vertical: '',}
        })
    };

    render() {

        const canShowCard = !Object.values(this.state.errMessage).every(item => {
            return item === '';
        });

        return (
            <div>
                <div className={'userInput'}>
                    <label htmlFor="horisontalInput">Horisontal value</label>
                    < input
                        id={'horisontalInput'}
                        type={'text'}
                        value={this.state.horisontal}
                        onChange={this.changeValue}
                        data-horisontal
                    />
                    <div className={'errMessage'}>
                        {this.state.errMessage.horisontal}
                    </div>
                </div>
                <div className={'userInput'}>
                    <label htmlFor="verticalInput">Vertical value</label>
                    < input
                        id={'verticalInput'}
                        type={'text'}
                        value={this.state.vertical}
                        onChange={this.changeValue}
                        data-vertical
                    />
                    <div className={'errMessage'}>
                        {this.state.errMessage.vertical}
                    </div>
                </div>
                <input type={'button'} value={'Show card'} onClick={this.showCard} disabled={canShowCard} data-main/>
                <input type={'button'} value={'Show queen of spades'} onClick={this.showQueenSpades} />

                <ShowCard
                horisontal={this.state.showCard.horisontal}
                vertical={this.state.showCard.vertical}
                />

            </div>
        );
    }
}

export default InputValues;