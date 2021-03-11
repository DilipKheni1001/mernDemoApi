'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _db = require('./config/db');

var _api = require('./api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 5000;

(0, _db.connect)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('dev'));

app.use('/api', _api.restRouter);
app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, function () {
  console.log('Server is running at PORT http://localhost:' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwiUE9SVCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVzdFJvdXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsTUFBTSx3QkFBWjtBQUNBLElBQU1DLE9BQU8sSUFBYjs7QUFFQTs7QUFFQUQsSUFBSUUsR0FBSixDQUFRQyxrQkFBUUMsSUFBUixFQUFSO0FBQ0FKLElBQUlFLEdBQUosQ0FBUUMsa0JBQVFFLFVBQVIsQ0FBbUIsRUFBRUMsVUFBVSxJQUFaLEVBQW5CLENBQVI7QUFDQU4sSUFBSUUsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjs7QUFFQUYsSUFBSUUsR0FBSixDQUFRLE1BQVIsRUFBZ0JLLGVBQWhCO0FBQ0FQLElBQUlFLEdBQUosQ0FBUSxVQUFDTSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUMxQixNQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQWQ7QUFDQUQsUUFBTUUsT0FBTixHQUFnQixlQUFoQjtBQUNBRixRQUFNRyxNQUFOLEdBQWUsR0FBZjtBQUNBSixPQUFLQyxLQUFMO0FBQ0QsQ0FMRDtBQU1BWCxJQUFJRSxHQUFKLENBQVEsVUFBQ1MsS0FBRCxFQUFRSCxHQUFSLEVBQWFDLEdBQWIsRUFBa0JDLElBQWxCLEVBQTJCO0FBQ2pDRCxNQUFJSyxNQUFKLENBQVdILE1BQU1HLE1BQU4sSUFBZ0IsR0FBM0I7QUFDQSxTQUFPTCxJQUFJTCxJQUFKLENBQVM7QUFDZE8sV0FBTztBQUNMRSxlQUFTRixNQUFNRTtBQURWO0FBRE8sR0FBVCxDQUFQO0FBS0QsQ0FQRDs7QUFTQWIsSUFBSWUsTUFBSixDQUFXZCxJQUFYLEVBQWlCLFlBQU07QUFDckJlLFVBQVFDLEdBQVIsaURBQTBEaEIsSUFBMUQ7QUFDRCxDQUZEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4vY29uZmlnL2RiJztcbmltcG9ydCB7IHJlc3RSb3V0ZXIgfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IFBPUlQgPSA1MDAwO1xuXG5jb25uZWN0KCk7XG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG5hcHAudXNlKCcvYXBpJywgcmVzdFJvdXRlcik7XG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcignTm90IGZvdW5kJyk7XG4gIGVycm9yLm1lc3NhZ2UgPSAnSW52YWxpZCByb3V0ZSc7XG4gIGVycm9yLnN0YXR1cyA9IDQwNDtcbiAgbmV4dChlcnJvcik7XG59KTtcbmFwcC51c2UoKGVycm9yLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApO1xuICByZXR1cm4gcmVzLmpzb24oe1xuICAgIGVycm9yOiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgYXQgUE9SVCBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbn0pO1xuIl19