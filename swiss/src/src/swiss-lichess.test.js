/**
 * @version     1
 * @package     SwissLichess
 * @copyright   Copyright (C) 2020 Riccardo Zorn. All rights reserved.
 * @license     Commercial
 * @author      Riccardo Zorn <code@fasterjoomla.com> - https://fasterweb.net
 */
'use strict';

const SwissLichess = require('./swiss-lichess');


describe('SwissLichess', () => {
  it('it loads', () => {
    let swissLichess = new SwissLichess({});
    expect(swissLichess.app).toBeDefined();
  });
});
