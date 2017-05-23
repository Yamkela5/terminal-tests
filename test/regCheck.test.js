const assert = require('assert');
const regCheck = require('../regCheck');

describe('The regCheck', function(){

    it('should check regNmbr.endsWith', function(){
        assert.equal(false, regCheck('GP'));
    });
    it('should check regNmbr.endsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(false, regCheck('CY'));
    });
});
