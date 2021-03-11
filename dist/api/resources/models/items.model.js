'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ create database table schema
var Schema = _mongoose2.default.Schema;

var itemsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Item must have name']
  },
  url: {
    type: String,
    required: [true, 'Item must have image url']
  },
  city: {
    type: String,
    required: [true, 'Item must have city name']
  },
  location: {
    type: String,
    required: [true, 'Item must have location address']
  }

});
itemsSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model('Items', itemsSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL21vZGVscy9pdGVtcy5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIml0ZW1zU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVybCIsImNpdHkiLCJsb2NhdGlvbiIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7SUFDUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGNBQWMsSUFBSUYsTUFBSixDQUFXO0FBQzdCRyxRQUFNO0FBQ0pDLFVBQU1DLE1BREY7QUFFSkMsY0FBVSxDQUFDLElBQUQsRUFBTyxxQkFBUDtBQUZOLEdBRHVCO0FBSzdCQyxPQUFLO0FBQ0hILFVBQU1DLE1BREg7QUFFSEMsY0FBVSxDQUFDLElBQUQsRUFBTywwQkFBUDtBQUZQLEdBTHdCO0FBUzdCRSxRQUFNO0FBQ0pKLFVBQU1DLE1BREY7QUFFSkMsY0FBVSxDQUFDLElBQUQsRUFBTywwQkFBUDtBQUZOLEdBVHVCO0FBYTVCRyxZQUFVO0FBQ1RMLFVBQU1DLE1BREc7QUFFVEMsY0FBVSxDQUFDLElBQUQsRUFBTyxpQ0FBUDtBQUZEOztBQWJrQixDQUFYLENBQXBCO0FBb0JBSixZQUFZUSxNQUFaLENBQW1CQywwQkFBbkI7a0JBQ2VWLG1CQUFTVyxLQUFULENBQWUsT0FBZixFQUF3QlYsV0FBeEIsQyIsImZpbGUiOiJpdGVtcy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tICdtb25nb29zZS1wYWdpbmF0ZSc7XG5cbi8vQCBjcmVhdGUgZGF0YWJhc2UgdGFibGUgc2NoZW1hXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5jb25zdCBpdGVtc1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0l0ZW0gbXVzdCBoYXZlIG5hbWUnXSxcbiAgfSxcbiAgdXJsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0l0ZW0gbXVzdCBoYXZlIGltYWdlIHVybCddLFxuICB9LFxuICBjaXR5OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0l0ZW0gbXVzdCBoYXZlIGNpdHkgbmFtZSddLFxuICB9XG4gICxsb2NhdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdJdGVtIG11c3QgaGF2ZSBsb2NhdGlvbiBhZGRyZXNzJ10sXG4gIH0sXG5cbiBcbn0pO1xuaXRlbXNTY2hlbWEucGx1Z2luKG1vbmdvb3NlUGFnaW5hdGUpO1xuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ0l0ZW1zJywgaXRlbXNTY2hlbWEpO1xuIl19