'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _items = require('./resources/routes/items.router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use('/items', _items.itemRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpdGVtUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxHQUFYLENBQWUsUUFBZixFQUF5QkMsaUJBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpdGVtUm91dGVyIH0gZnJvbSAnLi9yZXNvdXJjZXMvcm91dGVzL2l0ZW1zLnJvdXRlcic7XG5cbmV4cG9ydCBjb25zdCByZXN0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnJlc3RSb3V0ZXIudXNlKCcvaXRlbXMnLCBpdGVtUm91dGVyKTtcbiJdfQ==