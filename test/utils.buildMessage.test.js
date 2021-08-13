const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function() {
  describe('when receives na entity and an action', function() {
    it('should return the respective message', function() {
      const result = buildMessage('project', 'create');
      const expect = 'project created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when receives an entity and an action and is a list', function() {
    it('should return the respective message with the entity in plural', function() {
      const result = buildMessage('project', 'list');
      const expected = 'projects listed';
      assert.strictEqual(result, expected);
    });
  });
});
