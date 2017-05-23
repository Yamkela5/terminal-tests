const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown', function(){

    it('should countregNmbr.endsWith', function(){
        assert.equal(false, countAllFromTown('CA'));
    });
    it('should countregNmbr.startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(false, countAllFromTown('CY'));
    });
});
