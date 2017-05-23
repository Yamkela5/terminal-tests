const assert = require('assert');
const isWeekday = require('../isWeekday');
describe('The isWeekday function', function(){

    it('should check isWeekday that startsWith', function(){
        assert.equal(false, isWeekday('Sunday,Monday'));
    });
    it('should check isWeekday', function(){
        // this test will fail - can you fix it?
        assert.equal(false, isWeekday('Sunday,Monday'));
    });
});
