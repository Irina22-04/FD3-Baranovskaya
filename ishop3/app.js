"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Shop from "./components/shop";

import * as goodsArr from './goods.json';

const headersTable = {name: 'товар', price: 'цена', photo: 'изображение', count: 'количество', control: 'редактирование'};

ReactDOM.render(
    <Shop
        headersTable={headersTable}
        goods={goodsArr.default}
    />
    , document.getElementById('container')
);