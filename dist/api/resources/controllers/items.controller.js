'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _items = require('../models/items.model');

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  //@ insert data with validation
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var schema, _Joi$validate, value, error, items;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              schema = _joi2.default.object().keys({
                name: _joi2.default.string().required(),
                url: _joi2.default.string().required(),
                city: _joi2.default.string().required(),
                location: _joi2.default.string().required()

              });
              _Joi$validate = _joi2.default.validate(req.body, schema), value = _Joi$validate.value, error = _Joi$validate.error;

              if (!(error && error.details)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', res.status(400).json(error));

            case 5:
              _context.next = 7;
              return _items2.default.create(value);

            case 7:
              items = _context.sent;
              return _context.abrupt('return', res.json(items));

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);
              return _context.abrupt('return', res.status(500).send(_context.t0));

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  //@ get all record's
  getAllRecords: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$query, page, perPage, options, items;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$query = req.query, page = _req$query.page, perPage = _req$query.perPage;
              options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10
              };
              _context2.next = 5;
              return _items2.default.paginate({}, options);

            case 5:
              items = _context2.sent;
              return _context2.abrupt('return', res.json(items));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);

              console.error(_context2.t0);
              return _context2.abrupt('return', res.status(500).send(_context2.t0));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 9]]);
    }));

    function getAllRecords(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getAllRecords;
  }(),

  //@ Insert Staic record's
  insertSaticData: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var i, dataObj, items;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              i = 1;

            case 2:
              if (!(i <= 100)) {
                _context3.next = 10;
                break;
              }

              dataObj = {
                "name": "Product " + i,
                "url": "https://bit.ly/2OC7hJx",
                "city": "surat",
                "location": "Hirabaugh, Surat, Gujarat"
              };
              _context3.next = 6;
              return _items2.default.create(dataObj);

            case 6:
              items = _context3.sent;

            case 7:
              i++;
              _context3.next = 2;
              break;

            case 10:
              return _context3.abrupt('return', res.json(items));

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3['catch'](0);

              console.error(_context3.t0);
              return _context3.abrupt('return', res.status(500).send(_context3.t0));

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 13]]);
    }));

    function insertSaticData(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return insertSaticData;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NvbnRyb2xsZXJzL2l0ZW1zLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlIiwicmVxIiwicmVzIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsInVybCIsImNpdHkiLCJsb2NhdGlvbiIsInZhbGlkYXRlIiwiYm9keSIsInZhbHVlIiwiZXJyb3IiLCJkZXRhaWxzIiwic3RhdHVzIiwianNvbiIsIkl0ZW1zIiwiaXRlbXMiLCJjb25zb2xlIiwic2VuZCIsImdldEFsbFJlY29yZHMiLCJxdWVyeSIsInBhZ2UiLCJwZXJQYWdlIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwYWdpbmF0ZSIsImluc2VydFNhdGljRGF0YSIsImkiLCJkYXRhT2JqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFHZTtBQUNiO0FBQ0NBO0FBQUEsd0ZBQVEsaUJBQU1DLEdBQU4sRUFBV0MsR0FBWDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQ0Msb0JBSEQsR0FHVUMsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CQyxzQkFBTUgsY0FBSUksTUFBSixHQUFhQyxRQUFiLEVBRHlCO0FBRS9CQyxxQkFBS04sY0FBSUksTUFBSixHQUFhQyxRQUFiLEVBRjBCO0FBRy9CRSxzQkFBTVAsY0FBSUksTUFBSixHQUFhQyxRQUFiLEVBSHlCO0FBSS9CRywwQkFBVVIsY0FBSUksTUFBSixHQUFhQyxRQUFiOztBQUpxQixlQUFsQixDQUhWO0FBQUEsOEJBVW9CTCxjQUFJUyxRQUFKLENBQWFaLElBQUlhLElBQWpCLEVBQXVCWCxNQUF2QixDQVZwQixFQVVHWSxLQVZILGlCQVVHQSxLQVZILEVBVVVDLEtBVlYsaUJBVVVBLEtBVlY7O0FBQUEsb0JBV0RBLFNBQVNBLE1BQU1DLE9BWGQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBWUlmLElBQUlnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILEtBQXJCLENBWko7O0FBQUE7QUFBQTtBQUFBLHFCQWNlSSxnQkFBTXBCLE1BQU4sQ0FBYWUsS0FBYixDQWRmOztBQUFBO0FBY0NNLG1CQWREO0FBQUEsK0NBZUVuQixJQUFJaUIsSUFBSixDQUFTRSxLQUFULENBZkY7O0FBQUE7QUFBQTtBQUFBOztBQWlCTEMsc0JBQVFOLEtBQVI7QUFqQkssK0NBa0JFZCxJQUFJZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLGFBbEJGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FGWTtBQXVCYjtBQUNNQyxlQXhCTztBQUFBLDJHQXdCT3ZCLEdBeEJQLEVBd0JZQyxHQXhCWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkEwQmlCRCxJQUFJd0IsS0ExQnJCLEVBMEJEQyxJQTFCQyxjQTBCREEsSUExQkMsRUEwQktDLE9BMUJMLGNBMEJLQSxPQTFCTDtBQTJCSEMscUJBM0JHLEdBMkJPO0FBQ2RGLHNCQUFNRyxTQUFTSCxJQUFULEVBQWUsRUFBZixLQUFzQixDQURkO0FBRWRJLHVCQUFPRCxTQUFTRixPQUFULEVBQWtCLEVBQWxCLEtBQXlCO0FBRmxCLGVBM0JQO0FBQUE7QUFBQSxxQkErQldQLGdCQUFNVyxRQUFOLENBQWUsRUFBZixFQUFtQkgsT0FBbkIsQ0EvQlg7O0FBQUE7QUErQkhQLG1CQS9CRztBQUFBLGdEQWdDRm5CLElBQUlpQixJQUFKLENBQVNFLEtBQVQsQ0FoQ0U7O0FBQUE7QUFBQTtBQUFBOztBQWtDVEMsc0JBQVFOLEtBQVI7QUFsQ1MsZ0RBbUNGZCxJQUFJZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLGNBbkNFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQXNDYjtBQUNNUyxpQkF2Q087QUFBQSwyR0F1Q1MvQixHQXZDVCxFQXVDYUMsR0F2Q2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q0QrQixlQXpDQyxHQXlDQyxDQXpDRDs7QUFBQTtBQUFBLG9CQXlDR0EsS0FBRyxHQXpDTjtBQUFBO0FBQUE7QUFBQTs7QUEyQ0pDLHFCQTNDSSxHQTJDTTtBQUNqQix3QkFBTyxhQUFXRCxDQUREO0FBRWpCLHVCQUFNLHdCQUZXO0FBR2pCLHdCQUFPLE9BSFU7QUFJakIsNEJBQVc7QUFKTSxlQTNDTjtBQUFBO0FBQUEscUJBa0RVYixnQkFBTXBCLE1BQU4sQ0FBYWtDLE9BQWIsQ0FsRFY7O0FBQUE7QUFrREpiLG1CQWxESTs7QUFBQTtBQXlDVVksaUJBekNWO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdEQXFESC9CLElBQUlpQixJQUFKLENBQVNFLEtBQVQsQ0FyREc7O0FBQUE7QUFBQTtBQUFBOztBQXdEVEMsc0JBQVFOLEtBQVI7QUF4RFMsZ0RBeURGZCxJQUFJZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLGNBekRFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJpdGVtcy5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4uL21vZGVscy9pdGVtcy5tb2RlbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvL0AgaW5zZXJ0IGRhdGEgd2l0aCB2YWxpZGF0aW9uXG4gICBjcmVhdGU6IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIHVybDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIGNpdHk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBsb2NhdGlvbjogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgSXRlbXMuY3JlYXRlKHZhbHVlKTtcbiAgICAgIHJldHVybiByZXMuanNvbihpdGVtcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcbiAgICB9XG4gIH0sXG4gIC8vQCBnZXQgYWxsIHJlY29yZCdzXG4gIGFzeW5jIGdldEFsbFJlY29yZHMocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlLCBwZXJQYWdlIH0gPSByZXEucXVlcnk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCkgfHwgMSxcbiAgICAgICAgbGltaXQ6IHBhcnNlSW50KHBlclBhZ2UsIDEwKSB8fCAxMCxcbiAgICAgIH07XG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IEl0ZW1zLnBhZ2luYXRlKHt9LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXMuanNvbihpdGVtcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcbiAgICB9XG4gIH0sXG4gIC8vQCBJbnNlcnQgU3RhaWMgcmVjb3JkJ3NcbiAgYXN5bmMgaW5zZXJ0U2F0aWNEYXRhKHJlcSxyZXMpe1xuICAgdHJ5IHtcbiAgICAgIGZvcihsZXQgaT0xO2k8PTEwMDtpKyspe1xuICAgICBcbiAgICAgICB2YXIgZGF0YU9iaiA9IHtcbiAgICBcIm5hbWVcIjpcIlByb2R1Y3QgXCIraSxcbiAgICBcInVybFwiOlwiaHR0cHM6Ly9iaXQubHkvMk9DN2hKeFwiLFxuICAgIFwiY2l0eVwiOlwic3VyYXRcIixcbiAgICBcImxvY2F0aW9uXCI6XCJIaXJhYmF1Z2gsIFN1cmF0LCBHdWphcmF0XCJcbn1cbiAgXG4gICAgICAgdmFyIGl0ZW1zID0gYXdhaXQgSXRlbXMuY3JlYXRlKGRhdGFPYmopO1xuICAgICAgIFxuICAgICB9XG4gICAgIHJldHVybiByZXMuanNvbihpdGVtcyk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xuICAgIH1cbiAgfVxuXG59O1xuIl19