const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('totalPhoneBill', function(){

    it('should check totalPhoneBill that startsWith', function(){
        assert.equal('R2.75', totalPhoneBill('call'));
    });
    it('should check totalPhoneBill that startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal('R0.65', totalPhoneBill('sms'));
    });
});
