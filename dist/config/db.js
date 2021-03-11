'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
//@ mongodb database connection 
var connect = exports.connect = function connect() {
  return _mongoose2.default.connect('mongodb+srv://mahesh:FvwQP5hjaNyK2W83@elseif.9rtma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGIuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsbUJBQVNDLE9BQVQsR0FBbUJDLE9BQU9ELE9BQTFCO0FBQ0E7QUFDTyxJQUFNRSw0QkFBVSxTQUFWQSxPQUFVO0FBQUEsU0FBTUgsbUJBQVNHLE9BQVQsQ0FBaUIsNEdBQWpCLENBQU47QUFBQSxDQUFoQiIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbi8vQCBtb25nb2RiIGRhdGFiYXNlIGNvbm5lY3Rpb24gXG5leHBvcnQgY29uc3QgY29ubmVjdCA9ICgpID0+IG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vbWFoZXNoOkZ2d1FQNWhqYU55SzJXODNAZWxzZWlmLjlydG1hLm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiJdfQ==