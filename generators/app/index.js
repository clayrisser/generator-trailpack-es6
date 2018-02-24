'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _yeomanOptionOrPrompt = require('yeoman-option-or-prompt');

var _yeomanOptionOrPrompt2 = _interopRequireDefault(_yeomanOptionOrPrompt);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lib = require('./lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Generator) {
  _inherits(_class, _Generator);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'initializing',
    value: function initializing() {
      if (this.options.destination) this.destinationRoot(this.options.destination);
      this.context = {
        moment: _moment2.default
      };
      this.optionOrPrompt = _yeomanOptionOrPrompt2.default;
    }
  }, {
    key: 'prompting',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, name, _ref3, description, version, license, _ref4, authorName, authorEmail, _ref5, githubUsername, _ref6, authorUrl, _ref7, homepage, repository, template, install;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'name',
                  message: 'Project Name:',
                  default: (0, _lib.guessName)()
                }]);

              case 2:
                _ref2 = _context.sent;
                name = _ref2.name;

                if (!/^trailpack-/.test(name)) {
                  name = `trailpack-${name}`;
                }
                _context.next = 7;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'description',
                  message: 'Project Description:',
                  default: `The awesome ${name} project`
                }, {
                  type: 'input',
                  name: 'version',
                  message: 'Version:',
                  default: '0.0.1'
                }, {
                  type: 'input',
                  name: 'license',
                  message: 'License:',
                  default: 'MIT'
                }]);

              case 7:
                _ref3 = _context.sent;
                description = _ref3.description;
                version = _ref3.version;
                license = _ref3.license;
                _context.next = 13;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'authorName',
                  message: 'Author Name:',
                  default: (0, _lib.guessAuthorName)()
                }, {
                  type: 'input',
                  name: 'authorEmail',
                  message: 'Author Email:',
                  default: (0, _lib.guessEmail)()
                }]);

              case 13:
                _ref4 = _context.sent;
                authorName = _ref4.authorName;
                authorEmail = _ref4.authorEmail;
                _context.next = 18;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'githubUsername',
                  message: 'GitHub Username:',
                  default: (0, _lib.guessUsername)(authorEmail)
                }]);

              case 18:
                _ref5 = _context.sent;
                githubUsername = _ref5.githubUsername;
                _context.next = 22;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'authorUrl',
                  message: 'Author URL:',
                  default: `https://${githubUsername}.com`
                }]);

              case 22:
                _ref6 = _context.sent;
                authorUrl = _ref6.authorUrl;
                _context.next = 26;
                return this.optionOrPrompt([{
                  type: 'input',
                  name: 'homepage',
                  message: 'Homepage:',
                  default: `https://github.com/${githubUsername}/${name}`
                }, {
                  type: 'input',
                  name: 'repository',
                  message: 'Repository:',
                  default: `https://github.com/${githubUsername}/${name}`
                }, {
                  type: 'list',
                  name: 'template',
                  message: 'Template',
                  choices: ['minimal'],
                  default: 'minimal'
                }, {
                  type: 'confirm',
                  name: 'install',
                  message: 'Install dependencies',
                  default: true
                }]);

              case 26:
                _ref7 = _context.sent;
                homepage = _ref7.homepage;
                repository = _ref7.repository;
                template = _ref7.template;
                install = _ref7.install;

                this.answers = {
                  authorEmail,
                  authorName,
                  authorUrl,
                  description,
                  githubUsername,
                  homepage,
                  install,
                  license,
                  name,
                  repository,
                  template,
                  version
                };
                this.context = _extends({}, this.context, this.answers);

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prompting() {
        return _ref.apply(this, arguments);
      }

      return prompting;
    }()
  }, {
    key: 'configuring',
    value: function configuring() {
      if (!this.options.destination && !(0, _lib.isEmpty)()) {
        this.destinationRoot(_path2.default.resolve(this.answers.name));
      }
    }
  }, {
    key: 'default',
    value: function _default() {}
  }, {
    key: 'writing',
    value: function writing() {
      return (0, _lib.copy)(this);
    }
  }, {
    key: 'conflicts',
    value: function conflicts() {}
  }, {
    key: 'install',
    value: function install() {
      var install = this.options.install ? this.options.install[0].toLowerCase() : 'y';
      if (!this.answers.install || install === 'n' || install === 'f') return false;
      return this.installDependencies({
        npm: true,
        bower: false,
        yarn: false
      });
    }
  }, {
    key: 'end',
    value: function end() {}
  }]);

  return _class;
}(_yeomanGenerator2.default);