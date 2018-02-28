var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function Todo(title, description, isDone) {
  _classCallCheck(this, Todo);

  this.title = title;
  this.description = description;
  this.isDone = isDone;
};

var ItemsList = function (_React$Component) {
  _inherits(ItemsList, _React$Component);

  function ItemsList() {
    _classCallCheck(this, ItemsList);

    return _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).apply(this, arguments));
  }

  _createClass(ItemsList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('item list Props: ');
      console.log(this.props);
      var listItems = this.props.items.map(function (item, i) {
        return React.createElement(
          "li",
          { key: i },
          React.createElement(
            "div",
            { className: "text" },
            item.title
          ),
          React.createElement(
            "div",
            { className: "descr" },
            item.description
          ),
          React.createElement("input", { type: "checkbox", defaultChecked: item.isDone,
            onChange: _this2.handleChangeChk }),
          React.createElement(
            "div",
            {
              onClick: _this2.props.clickAction.bind(_this2, i),
              className: "delete" },
            "Delete"
          )
        );
      });
      return React.createElement(
        "ul",
        null,
        listItems
      );
    }
  }]);

  return ItemsList;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    console.log('constructor App');

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.addItem = function (item) {
      var newItems = _this3.state.items;
      newItems.push(item);
      _this3.setState({ items: newItems });
    };

    _this3.deleteItem = function (idx) {
      var newItems = _this3.state.items;
      newItems.splice(idx, 1);
      _this3.setState({ items: newItems });
    };

    _this3.onSetSearch = _this3.onSetSearch.bind(_this3);
    _this3.state = {
      searchText: '',
      items: [],
      allItems: [new Todo('Todo 1', 'Description 1', false), new Todo('Todo 2', 'Description 2', true), new Todo('Todo 3', 'Description 3', false)]
    };
    for (var i = 0; i < _this3.state.allItems.length; i++) {
      //  if(this.state.searchText == '' || this.state.allItems[i].contains(this.state.searchText))
      _this3.state.items.push(_this3.state.allItems[i]);
    }
    return _this3;
  }

  _createClass(App, [{
    key: "onSetSearch",
    value: function onSetSearch() {
      var text = document.querySelector('input').value;
      this.state.searchText = text;
      console.log('Set state search = ' + this.state.searchText);

      //ищем в первоначальном списке
      var newItems = [];
      for (var i = 0; i < this.state.allItems.length; i++) {
        if (this.state.allItems[i].title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || this.state.allItems[i].description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0) {
          console.log(this.state.allItems[i]);
          newItems.push(this.state.allItems[i]);
        }
      }
      console.log(newItems);
      this.state.items = newItems;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "todo-list" },
        React.createElement(
          "form",
          null,
          React.createElement("input", { className: "inp_search", type: "text", name: "name", placeholder: "..." }),
          React.createElement(
            "button",
            { type: "button", className: "button_search", onClick: this.onSetSearch },
            "Search"
          )
        ),
        React.createElement(ItemsList, {
          items: this.state.items,
          searchText: this.state.searchText,
          clickAction: this.deleteItem })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));