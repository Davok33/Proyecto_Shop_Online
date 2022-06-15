const { exportAllDeclaration } = require('@babel/types')
const { inspect } = require('util')
const sum = require('./sum')

test('el resultado de a y b, tiene que ser 3', ()=>{expect(sum(1, 2)).toBe(3)});
