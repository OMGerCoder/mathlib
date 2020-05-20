'use strict';
const expect = require('chai').expect;
const mathlib = require('../dist/index');

describe('generic functions test', () =>{
    it('should say 4 + 2 = 6', () =>{
        var result = mathlib.add(4, 2);
        expect(result).to.equal(6);
    });
    it('should say 4 - 2 is 2', () => {
        var result = mathlib.sub(4, 2);
        expect(result).to.equal(2)
    });
});
describe('num class test', () =>{
    it('should create a number with a value of 6', () => {
        var result = new mathlib.Num(6);
        expect(result.value).to.equal(6);
    });
    it('should create a number with a value of 0', () => {
        var result = new mathlib.Num();
        expect(result.value).to.equal(0);
    });
    it('should create a number with a value of 6 (starting with 0)', () => {
        var result = new mathlib.Num();
        result.add(6);
        expect(result.value).to.equal(6);
    });
    
    it('should create a number with a value of 6 (starting with 10)', () => {
        var result = new mathlib.Num(10);
        result.sub(4);
        expect(result.value).to.equal(6);
    });
});