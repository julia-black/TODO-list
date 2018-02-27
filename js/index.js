var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//var searchText = '';
var Todo = function Todo(title, description, isDone) {
  _classCallCheck(this, Todo);

  this.title = title;
  this.description = description;
  this.isDone = isDone;
};

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

    _this.addItem = function (item) {
      var newItems = _this.state.items;
      newItems.push(item);
      _this.setState({ items: newItems });
    };

    _this.deleteItem = function (idx) {
      var newItems = _this.state.items;
      newItems.splice(idx, 1);
      _this.setState({ items: newItems });
    };

    _this.state = {
      items: [],
      allItems: [new Todo('Todo 1', 'Description 1', false), new Todo('Todo 2', 'Description 2', true), new Todo('Todo 3', 'Description 3', false)]
    };

    console.log('in todoList constr: ' + searchText);
    for (var i = 0; i < _this.state.allItems.length; i++) {
      if (searchText == '' || _this.state.allItems[i].contains(searchText)) {
        console.log("yes");
        _this.state.items.push(_this.state.allItems[i]);
      } else {
        console.log("no");
      }
    }
    return _this;
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'todo-list' },
        React.createElement(ItemsList, {
          items: this.state.items,
          clickAction: this.deleteItem })
      );
    }
  }]);

  return TodoList;
}(React.Component);

var ItemsList = function (_React$Component2) {
  _inherits(ItemsList, _React$Component2);

  function ItemsList() {
    _classCallCheck(this, ItemsList);

    return _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).apply(this, arguments));
  }

  _createClass(ItemsList, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('item list Props: ');
      console.log(this.props);
      var listItems = this.props.items.map(function (item, i) {
        return React.createElement(
          'li',
          { key: i },
          React.createElement(
            'div',
            { className: 'text' },
            item.title
          ),
          React.createElement(
            'div',
            { className: 'descr' },
            item.description
          ),
          React.createElement('input', { type: 'checkbox', defaultChecked: item.isDone,
            onChange: _this3.handleChangeChk }),
          React.createElement(
            'div',
            {
              onClick: _this3.props.clickAction.bind(_this3, i),
              className: 'delete' },
            'Delete'
          )
        );
      });
      return React.createElement(
        'ul',
        null,
        listItems
      );
    }
  }]);

  return ItemsList;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(TodoList, null);
    }
  }]);

  return App;
}(React.Component);

var Search = function (_React$Component4) {
  _inherits(Search, _React$Component4);

  function Search() {
    _classCallCheck(this, Search);

    var _this5 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    console.log('in search constr: ' + _this5.state);
    _this5.onSetSearch = _this5.onSetSearch.bind(_this5);
    _this5.state = { search: '' };
    return _this5;
  }

  _createClass(Search, [{
    key: 'onSetSearch',
    value: function onSetSearch() {
      var text = document.querySelector('input').value;
      this.state.search = text;
      searchText = text;
      console.log('Set state search = ' + searchText);
    }

    // _handleKeyPress(e, field) {
    //   if (e.keyCode === 13) {
    //    e.preventDefault();
    //    console.log('press Enter');
    //   } 
    //}

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement('input', { className: 'inp_search', type: 'text', name: 'name', placeholder: '...' }),
          React.createElement(
            'button',
            { type: 'button', className: 'button_search', onClick: this.onSetSearch },
            'Search'
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);

var App1 = function (_React$Component5) {
  _inherits(App1, _React$Component5);

  function App1(props) {
    _classCallCheck(this, App1);

    console.log('constructor App');

    var _this6 = _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).call(this, props));

    _this6.addItem = function (item) {
      var newItems = _this6.state.items;
      newItems.push(item);
      _this6.setState({ items: newItems });
    };

    _this6.deleteItem = function (idx) {
      var newItems = _this6.state.items;
      newItems.splice(idx, 1);
      _this6.setState({ items: newItems });
    };

    _this6.onSetSearch = _this6.onSetSearch.bind(_this6);
    _this6.state = {
      searchText: '',
      items: [],
      allItems: [new Todo('Todo 1', 'Description 1', false), new Todo('Todo 2', 'Description 2', true), new Todo('Todo 3', 'Description 3', false)]
    };
    for (var i = 0; i < _this6.state.allItems.length; i++) {
      //  if(this.state.searchText == '' || this.state.allItems[i].contains(this.state.searchText))
      _this6.state.items.push(_this6.state.allItems[i]);
    }
    return _this6;
  }

  _createClass(App1, [{
    key: 'onSetSearch',
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'todo-list' },
        React.createElement(
          'form',
          null,
          React.createElement('input', { className: 'inp_search', type: 'text', name: 'name', placeholder: '...' }),
          React.createElement(
            'button',
            { type: 'button', className: 'button_search', onClick: this.onSetSearch },
            'Search'
          )
        ),
        React.createElement(ItemsList, {
          items: this.state.items,
          searchText: this.state.searchText,
          clickAction: this.deleteItem })
      );
    }
  }]);

  return App1;
}(React.Component);
//ReactDOM.render(<Search />, document.getElementById('header'));


ReactDOM.render(React.createElement(App1, null), document.getElementById('container'));