'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isEmpty = isEmpty;
exports.guessEmail = guessEmail;
exports.guessUsername = guessUsername;
exports.guessName = guessName;
exports.guessAuthorName = guessAuthorName;
exports.copy = copy;

require('babel-polyfill');

var _emptyDir = require('empty-dir');

var _emptyDir2 = _interopRequireDefault(_emptyDir);

var _gitUserEmail = require('git-user-email');

var _gitUserEmail2 = _interopRequireDefault(_gitUserEmail);

var _gitUserName = require('git-user-name');

var _gitUserName2 = _interopRequireDefault(_gitUserName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty() {
  return _emptyDir2.default.sync(process.cwd());
}

function guessEmail() {
  return (0, _gitUserEmail2.default)() || 'email@example.com';
}

function guessUsername(email) {
  var matches = (email || guessEmail()).match(/^[^@]+/g);
  if (matches.length > 0) return matches[0];
  return 'some-username';
}

function guessName() {
  var matches = process.cwd().match(/[^\/]+$/g);
  if (isEmpty() && matches.length > 0) return matches[0];
  return 'some-name';
}

function guessAuthorName() {
  return (0, _gitUserName2.default)() || 'Some Name';
}

function copy(yo) {
  return Promise.all([yo.fs.copyTpl(yo.templatePath('template/shared/_package.json'), yo.destinationPath('package.json'), _extends({}, yo.context)), yo.fs.copyTpl(yo.templatePath('template/shared/LICENSE'), yo.destinationPath('LICENSE'), _extends({}, yo.context)), yo.fs.copyTpl(yo.templatePath('template/shared/README.md'), yo.destinationPath('README.md'), _extends({}, yo.context)), yo.fs.copy(yo.templatePath('template/shared/_editorconfig'), yo.destinationPath('.editorconfig')), yo.fs.copy(yo.templatePath('template/shared/_gitignore'), yo.destinationPath('.gitignore')), yo.fs.copy(yo.templatePath('template/shared/_prettierrc'), yo.destinationPath('.prettierrc')), yo.fs.copyTpl(yo.templatePath('template/shared/src/**'), yo.destinationPath('src'), _extends({}, yo.context)), yo.fs.copyTpl(yo.templatePath('template/shared/_eslintrc'), yo.destinationPath('.eslintrc'), _extends({}, yo.context))]);
}