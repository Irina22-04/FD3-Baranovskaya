import React from 'react';
import PropTypes from 'prop-types';

import {clientEvents, MobileClient} from "./MobileClient";

import './MobileCompany.css';
import {cardEvents, EditCard} from './editCard';

class MobileCompany extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = ({
            clients: this.props.clients,
            showClients: 'all',
            clientsList: this.props.clients,
            isSelected: null,
        });
    }

    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
    };

    componentDidMount() {
        clientEvents.addListener('editClient', this.editClient);
        clientEvents.addListener('deleteClient', this.deleteClient);
        cardEvents.addListener('edit', this.editClientList);
        cardEvents.addListener('cancelEdit', this.cancelEditClientList);
    };

    componentWillUnmount() {
        clientEvents.removeListener('editClient', this.editClient);
        cardEvents.removeListener('edit', this.editClientList);
        cardEvents.removeListener('cancelEdit', this.cancelEditClientList);
        clientEvents.removeListener('deleteClient', this.deleteClient);
    };

    deleteClient = id => {
        const newClientsList = this.state.clientsList.filter(client => client.id !== id);
        const newClients = this.state.clients.filter(client => client.id !== id);

        this.setState({
            clientsList: newClientsList,
            clients: newClients,
            isSelected: null,
        })
    };

    cancelEditClientList = () => {
        this.setState({
            isSelected: null,
        })
    };

    editClientList = (newClient) => {
        const isNewClient = !this.state.clientsList.some(client => client.id === newClient.id);
        if (isNewClient) {
            return this.saveNewClient(newClient);
        }

        const newClientList = this.state.clientsList.map(client => client.id === newClient.id ? newClient : client);
        const newClients = this.state.clients.map(client => client.id === newClient.id ? newClient : client);

        this.setState({
            clientsList: newClientList,
            clients: newClients,
            isSelected: null,
        })
    };

    saveNewClient = (newClient) => {
        const newClientList = [...this.state.clientsList, newClient];
        this.setState({
            clientsList: newClientList,
            clients: newClientList,
            isSelected: null,
            showClients: 'all',
        })
    };

    editClient = (id) => {
        this.setState({
            isSelected: id,
        })
    };

    setClients = (value) => {
        const {showClients} = this.state;
        if (showClients === value) {
            return;
        }

        const clients = value === 'all' ? this.state.clientsList : this.getClientList(value);

        this.setState({
            showClients: value,
            clients: clients,
            isSelected: null,
        })
    };

    getClientList = value => {
        const func = (value === 'actived') ? this.showActiveClients : this.showBlockedClients;
        return [...this.state.clientsList].filter(func);
    };

    showBlockedClients = (item) => item.balance < 0;

    showActiveClients = (item) => item.balance >= 0;

    setAllClients = () => {
        this.setClients('all');
    };

    setActiveClients = () => {
        this.setClients('actived');
    };

    setBlockedClients = () => {
        this.setClients('blocked');
    };

    clientsCode = () => {
        return this.state.clients.map(client => {
            return <MobileClient key={client.id} client={client}/>
        });
    };

    showEditCard = () => {
        const {isSelected} = this.state;
        if (!isSelected) {
            return null;
        }

        let editClient = this.state.clients.find(client => client.id === isSelected);

        if (!editClient) {
            editClient = {
                fam: '',
                im: '',
                otch: '',
                balance: '',
                id: isSelected,
            }
        }
        return <EditCard client={editClient}/>;
    };

    createNewClient = () => {
        const newClientId = this.state.clientsList[this.state.clientsList.length - 1].id + 1;
        this.setState({
            isSelected: newClientId,
        })
    };

    render() {

        console.log("MobileCompany render");

        return (
            <div>
                <div className='mobileCompany'>

                    <div className={'buttons'}>
                        <input type={"button"} className={'all'} value={"Все"} onClick={this.setAllClients}/>
                        <input type={"button"} className={'active'} value={"Активные"} onClick={this.setActiveClients}/>
                        <input type={"button"} className={'blocked'} value={"Заблокированные"} onClick={this.setBlockedClients}/>
                    </div>

                    <div className='mobileCompanyClients'>
                        <div className={"clientHeader"}>
                            <div className={"clientSurname header"}>
                                Фамилия
                            </div>
                            <div className={"clientName header"}>
                                Имя
                            </div>
                            <div className={"clientPatronym header"}>
                                Отчество
                            </div>
                            <div className={"clientBalance header"}>
                                Баланс
                            </div>
                            <div className={"clientStatus header"}>
                                Статус
                            </div>
                            <div className={"clientEdit header"}>
                                Редактировать
                            </div>
                            <div className={"clientDelete header"}>
                                Удалить
                            </div>
                        </div>
                        <div className={"clients"}>
                            {this.clientsCode()}
                        </div>
                    </div>

                </div>
                <input type={'button'} className={'addClient'} value={'добавить клиента'} onClick={this.createNewClient}/>

                {this.showEditCard()}
            </div>
        );
    }
}

export default MobileCompany;
