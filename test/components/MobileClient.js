import React from 'react';
import PropTypes from 'prop-types';
import {EventEmitter} from 'events';

import './MobileClient.css';

const clientEvents = new EventEmitter();

class MobileClient extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        })
    };

    clickEdit = () => {
        clientEvents.emit('editClient', this.props.client.id);
    };

    deleteClient = () => {
        clientEvents.emit('deleteClient', this.props.client.id);
    };

    render() {

        console.log("MobileClient id=" + this.props.client.id + " render");

        return (
            <div className='mobileClient'>
                <div className={"clientSurname"}>
                    {this.props.client.fam}
                </div>
                <div className={"clientName"}>
                    {this.props.client.im}
                </div>
                <div className={"clientPatronym"}>
                    {this.props.client.otch}
                </div>
                <div className={"clientBalance"}>
                    {this.props.client.balance}
                </div>
                <div className={this.props.client.balance >= 0 ? "clientStatus green" : "clientStatus red"}>
                    {this.props.client.balance >= 0 ? 'active' : 'blocked'}
                </div>
                <div className={"clientEdit"}>
                    <input type={"button"} value={"Редактировать"} onClick={this.clickEdit}/>
                </div>
                <div className={"clientDelete"}>
                    <input type={"button"} value={"Удалить"} onClick={this.deleteClient}/>
                </div>
            </div>
        );
    }
}

export {MobileClient, clientEvents};
