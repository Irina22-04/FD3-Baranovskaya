"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import {cardEvents} from '../components/editCard';
import {clientEvents} from '../components/MobileClient';

const clientsArr = [
    {id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200},
    {id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250},
    {id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180},
    {id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220},
];

describe('MobileCompany', () => {
    const component = renderer.create(
        <MobileCompany clients={clientsArr}/>
    );

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    it('show blocked client should work', () => {

        const buttonBlockedElem = component.root.findByProps({className: "blocked"});
        buttonBlockedElem.props.onClick();

        expect(component.getInstance().state.clients).toEqual([{
            id: 120,
            fam: 'Григорьев',
            im: 'Григорий',
            otch: 'Григорьевич',
            balance: -220
        }]);

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    it('show active client should work', () => {

        const buttonActiveElem = component.root.findByProps({className: "active"});
        buttonActiveElem.props.onClick();

        expect(component.getInstance().state.clients).toEqual([
            {
                id: 101,
                fam: 'Иванов',
                im: 'Иван',
                otch: 'Иванович',
                balance: 200
            },
            {
                id: 105,
                fam: 'Сидоров',
                im: 'Сидор',
                otch: 'Сидорович',
                balance: 250
            },
            {
                id: 110,
                fam: 'Петров',
                im: 'Пётр',
                otch: 'Петрович',
                balance: 180
            }
        ]);

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    it('show all client should work', () => {

        const buttonAllElem = component.root.findByProps({className: "all"});
        buttonAllElem.props.onClick();

        expect(component.getInstance().state.clients).toEqual([
            {
                id: 101,
                fam: 'Иванов',
                im: 'Иван',
                otch: 'Иванович',
                balance: 200
            },
            {
                id: 105,
                fam: 'Сидоров',
                im: 'Сидор',
                otch: 'Сидорович',
                balance: 250
            },
            {
                id: 110,
                fam: 'Петров',
                im: 'Пётр',
                otch: 'Петрович',
                balance: 180
            },
            {
                id: 120,
                fam: 'Григорьев',
                im: 'Григорий',
                otch: 'Григорьевич',
                balance: -220
            }
        ]);

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    it('edit client should work', () => {
        cardEvents.emit('edit', {id: 101, fam: 'Иванов', im: 'Иван', otch: 'Иванович', balance: 350});
        expect(component.getInstance().state.clients).toEqual([
            {
                id: 101,
                fam: 'Иванов',
                im: 'Иван',
                otch: 'Иванович',
                balance: 350
            },
            {
                id: 105,
                fam: 'Сидоров',
                im: 'Сидор',
                otch: 'Сидорович',
                balance: 250
            },
            {
                id: 110,
                fam: 'Петров',
                im: 'Пётр',
                otch: 'Петрович',
                balance: 180
            },
            {
                id: 120,
                fam: 'Григорьев',
                im: 'Григорий',
                otch: 'Григорьевич',
                balance: -220
            }
        ]);

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    it('add client should work', () => {
        const buttonAddClientElem = component.root.findByProps({className: "addClient"});
        buttonAddClientElem.props.onClick();

        cardEvents.emit('edit', {id: 121, fam: 'Антонов', im: 'Антон', otch: 'Антонович', balance: 350});
        expect(component.getInstance().state.clients).toEqual([
            {
                id: 101,
                fam: 'Иванов',
                im: 'Иван',
                otch: 'Иванович',
                balance: 350
            },
            {
                id: 105,
                fam: 'Сидоров',
                im: 'Сидор',
                otch: 'Сидорович',
                balance: 250
            },
            {
                id: 110,
                fam: 'Петров',
                im: 'Пётр',
                otch: 'Петрович',
                balance: 180
            },
            {
                id: 120,
                fam: 'Григорьев',
                im: 'Григорий',
                otch: 'Григорьевич',
                balance: -220
            },
            {
                id: 121,
                fam: 'Антонов',
                im: 'Антон',
                otch: 'Антонович',
                balance: 350
            }
        ]);

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    });

    it('delete client should work', () => {
        clientEvents.emit('deleteClient', 121);
        expect(component.getInstance().state.clients).toEqual(
            [
                {
                    id: 101,
                    fam: 'Иванов',
                    im: 'Иван',
                    otch: 'Иванович',
                    balance: 350
                },
                {
                    id: 105,
                    fam: 'Сидоров',
                    im: 'Сидор',
                    otch: 'Сидорович',
                    balance: 250
                },
                {
                    id: 110,
                    fam: 'Петров',
                    im: 'Пётр',
                    otch: 'Петрович',
                    balance: 180
                },
                {
                    id: 120,
                    fam: 'Григорьев',
                    im: 'Григорий',
                    otch: 'Григорьевич',
                    balance: -220
                }
            ]
        );

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();
    })

});