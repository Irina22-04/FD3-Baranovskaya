"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import RainbowFrame from "./components/rainbowFrame";

import colors from './colors.json';

ReactDOM.render(
    <RainbowFrame colors={colors}>
        Hello!
    </RainbowFrame>
    , document.getElementById('container')
);