const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('', function(){

    it('should countregNmbr.endsWith', function(){
        assert.equal(false, countAllPaarl('CA'));
    });
    it('should countregNmbr.startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(false, countAllPaarl('CY'));
    });
});
