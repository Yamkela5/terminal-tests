const assert = require('assert');
const transportFee = require('../transportFee');

describe('transportFee', function(){

    it('should show transportFee that startsWith', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should show transportFee that startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal('R10', transportFee('afternoon'));
    });
});
