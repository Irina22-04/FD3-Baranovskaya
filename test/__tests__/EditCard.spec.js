"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import {EditCard, cardEvents} from '../components/editCard';

describe ('EditCard', () => {

    const component = renderer.create(
        <EditCard client={{id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200}}/>
    );

    const spy = jest.spyOn(cardEvents, 'emit');

    it ('edit client should work', () => {
        const surnameInput = component.root.findByProps({className: 'card-surname'});
        component.getInstance().inputSurname = {current: {value: 'Ильин'}};
        component.getInstance().inputName = {current: {value: 'Илья'}};
        component.getInstance().inputPatronym = {current: {value: 'Ильич'}};
        component.getInstance().inputBalance = {current: {value: 500}};

        //console.log(component.getInstance())
        const saveButton = component.root.findByProps({className: 'controlEdit save-button'});
        saveButton.props.onClick();

        expect(spy).toHaveBeenCalledWith('edit', {id: 101, fam: "Ильин", im: "Илья", otch: "Ильич", balance: 500});
    })
});