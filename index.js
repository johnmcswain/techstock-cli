#!/usr/bin/env node

'use strict';

/*global require*/
/*global process*/
/*global console*/
/* eslint-disable no-console */
/*eslint no-undef: "error"*/

var program = require('commander');
var packageInfo = require('./package');


/*

program
    .version('0.1','-v')
    .option('-o, --option','option description')
    .option('-m, --more','we can have as many options as we want')
    .option('-i, --input [optional]','optional user input')
    .option('-I, --another-input <required>','required user input')
    .parse(process.argv); // end with parse to parse through the input

 */
program
    .command('')
    .version(packageInfo.version,'-v')
    .description('')
    .command('')
    .option('-h, --hey','option description')
    .parse(process.argv) // end with parse to parse through the input


console.log(program.hey);