"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import RainbowFrame from "./components/rainbowFrame";

import * as colors from './colors.json';

ReactDOM.render(
    <RainbowFrame colors={colors.default}>
        Hello!
    </RainbowFrame>
    , document.getElementById('container')
);