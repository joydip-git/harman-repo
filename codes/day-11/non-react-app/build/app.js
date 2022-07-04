define(["exports", "./components/Welcome", "./components/Description"], function (_exports, _Welcome, _Description) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _Welcome = _interopRequireDefault(_Welcome);
  _Description = _interopRequireDefault(_Description);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function App() {
    //const design = React.createElement('div', null, 'Welcome to React JS')
    var welcomeComponent = (0, _Welcome["default"])();
    var descriptionComponent = (0, _Description["default"])();
    var design = document.createElement('div');
    design.appendChild(welcomeComponent);
    design.appendChild(descriptionComponent);
    return design;
  }

  var _default = App;
  _exports["default"] = _default;
});