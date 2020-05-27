"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import TreeContainer from "./components/treeContainer";

import dataTree from './dataTree.json';

ReactDOM.render(
    <TreeContainer tree={dataTree}/>
    , document.getElementById('container')
);