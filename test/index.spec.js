'use strict';

require('dotenv').config({ path: __dirname + '/.env', silent: true });

// load deps
const lab = exports.lab = require('lab').script();
global.expect = require('chai').expect;

// prepare environment
global. it = lab.it;
global.describe = lab.describe;
global.before = lab.before;
global.beforeEach = lab.beforeEach;

// get the server
global.server = require('../src/core/server');
global.db = global.server.database;
