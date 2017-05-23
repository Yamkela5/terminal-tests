const assert = require('assert');
const yearsAgo = require('../yearsAgo');describe('The yearsAgo', function(){

    it('should count yearsAgo', function(){
        assert.equal(7, yearsAgo('2010'));
    });
    it('should count yearsAgo', function(){
        // this test will fail - can you fix it?
        assert.equal(5, yearsAgo('2012'));
    });
});
