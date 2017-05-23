const assert = require('assert');
const fromWhere = require('../fromWhere');
describe('fromWhere', function(){

    it('should check fromWhere.startsWith', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should check fromWhere.startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal('Paarl', fromWhere('CJ'));
    });
});
