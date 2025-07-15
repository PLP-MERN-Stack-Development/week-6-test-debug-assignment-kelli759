const logger = require('../../middleware/logger');

test('should call next()', () => {
  const req = { method: 'GET', url: '/' };
  const res = {};
  const next = jest.fn();
  logger(req, res, next);
  expect(next).toHaveBeenCalled();
});
