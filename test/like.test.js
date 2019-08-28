require('./utils');
const parse = require('../lib/nql').parse;
const lex = require('../lib/nql').lex;

describe('Parser', function () {
    it('can lex', function (){
        console.log(lex('%'));
    });
    it('can parse like', function (){
        console.log(parse('title:%\'china\' '));
    });
});