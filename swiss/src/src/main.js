/**
 * @version     1
 * @package     SwissLichess
 * @copyright   Copyright (C) 2020 Riccardo Zorn. All rights reserved.
 * @license     Commercial
 * @author      Riccardo Zorn <code@fasterjoomla.com> - https://fasterweb.net
 */
'use strict';

const express = require('express');
const app = express();
const SwissLichess = require('./swiss-lichess');

module.exports = app;
let swissLichess = new SwissLichess(app);
swissLichess.initialise();
