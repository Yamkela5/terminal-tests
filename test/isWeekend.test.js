const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('The isFromBellville function', function(){

    it('should check isFromBellville that startsWith', function(){
        assert.equal(true, isFromBellville('CY 1234'));
    });
    it('should check FromBellville', function(){
        // this test will fail - can you fix it?
        assert.equal(true, isFromBellville('CY'));
    });
});
