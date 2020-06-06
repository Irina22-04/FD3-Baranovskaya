"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import {MobileClient, clientEvents} from '../components/MobileClient';

describe('MobileClient', () => {
    const component = renderer.create(
        <MobileClient key={101} client={{id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200}}/>
    );

    const spy = jest.spyOn(clientEvents, 'emit');

    it('delete client should work', () => {

        const buttonDeleteWrapper = component.root.findByProps({className: 'clientDelete'});
        const buttonDelete = buttonDeleteWrapper.findByType('input');

        buttonDelete.props.onClick();

        expect(spy).toHaveBeenCalledWith('deleteClient', 101);
    });

    it('edit client should work', () => {

        const buttonEditWrapper = component.root.findByProps({className: 'clientEdit'});
        const buttonEdit = buttonEditWrapper.findByType('input');

        buttonEdit.props.onClick();

        expect(spy).toHaveBeenCalledWith('editClient', 101);
    });
});