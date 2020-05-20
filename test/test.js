'use strict';
const expect = require('chai').expect;
const index = require('../dist/index');

describe('functions test', () =>{
    it('should say 4 + 2 = 6', () =>{
        var result = index.add(4, 2);
        expect(result).to.equal(6);
    });
    it('should say 4 - 2 is 2', () => {
        var result = index.sub(4, 2);
        expect(result).to.equal(2)
    })
});