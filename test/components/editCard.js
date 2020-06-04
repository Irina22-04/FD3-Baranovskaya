import React from 'react';
import PropTypes from 'prop-types';
import {EventEmitter} from 'events';

import './editCard.css';

const cardEvents = new EventEmitter();

class EditCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.inputSurname = React.createRef();
        this.inputName = React.createRef();
        this.inputPatronym = React.createRef();
        this.inputBalance = React.createRef();
    };

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number,
            fam: PropTypes.string,
            im: PropTypes.string,
            otch: PropTypes.string,
            balance: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.client !== prevProps.client) {
            this.inputSurname.current.value = this.props.client.fam;
            this.inputName.current.value = this.props.client.im;
            this.inputPatronym.current.value = this.props.client.otch;
            this.inputBalance.current.value = this.props.client.balance;
        }
    };

    saveEdit = () => {
        const newClient = {
            ...this.props.client,
            fam: this.inputSurname.current.value,
            im: this.inputName.current.value,
            otch: this.inputPatronym.current.value,
            balance: parseFloat(this.inputBalance.current.value),
        };

        cardEvents.emit('edit', newClient);
    };

    cancelEdit = () => {
        this.inputSurname.current.value = this.props.client.fam;
        this.inputName.current.value = this.props.client.im;
        this.inputPatronym.current.value = this.props.client.otch;
        this.inputBalance.current.value = this.props.client.balance;

        cardEvents.emit('cancelEdit');
    };

    render() {
        console.log('EditCard render');

        return (
            <div className={"edit-card"}>
                <div>
                    <label>Фамилия:
                        <input className={'card-surname'} type='text' ref={this.inputSurname}
                               defaultValue={this.props.client.fam}/>
                    </label>
                </div>
                <div>
                    <label>Имя:
                        <input className={'card-name'} type='text' ref={this.inputName}
                               defaultValue={this.props.client.im}/>
                    </label>
                </div>
                <div>
                    <label>Отчество:
                        <input className={'card-patronym'} type='text' ref={this.inputPatronym}
                               defaultValue={this.props.client.otch}/>
                    </label>
                </div>
                <div>
                    <label>Баланс:
                        <input className={'card-balance'} type='text' ref={this.inputBalance}
                               defaultValue={this.props.client.balance}/>
                    </label>
                </div>

                <input className={'controlEdit save-button'} type="button" value={'Save'}
                       onClick={this.saveEdit}/>
                <input className={'controlEdit'} type="button" value={'Cancel'} onClick={this.cancelEdit}/>

            </div>
        )
    }
}

export {EditCard, cardEvents};