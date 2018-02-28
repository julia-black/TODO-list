var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      if (!this.props.show) {
        return null;
      }
      return React.createElement(
        "div",
        { className: "backdrop" },
        React.createElement(
          "div",
          { className: "modal" },
          this.props.children,
          React.createElement(
            "form",
            null,
            React.createElement("input", { className: "inp_add inp_title", placeholder: "Title" }),
            React.createElement("input", { className: "inp_add inp_description", placeholder: "Description" })
          ),
          React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
              "button",
              { className: "add_task", onClick: this.props.addNewTask },
              " Add "
            ),
            React.createElement(
              "button",
              { className: "button_close", onClick: this.props.onClose },
              "Close"
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

var Todo = function Todo(title, description, isDone) {
  _classCallCheck(this, Todo);

  this.title = title;
  this.description = description;
  this.isDone = isDone;
};

var ItemsList = function (_React$Component2) {
  _inherits(ItemsList, _React$Component2);

  function ItemsList() {
    _classCallCheck(this, ItemsList);

    return _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).apply(this, arguments));
  }

  _createClass(ItemsList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

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
            onChange: _this3.handleChangeChk }),
          React.createElement(
            "div",
            {
              onClick: _this3.props.clickAction.bind(_this3, i),
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

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    console.log('constructor App');

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.addNewTask = function () {
      var title = document.querySelector('.inp_title').value;
      var desc = document.querySelector('.inp_description').value;
      if (title != '') {
        var newItem = new Todo(title, desc, false);
        //добавляем новый элемент
        var newItems = _this4.state.items;
        newItems.push(newItem);
        _this4.setState({ allItems: newItems });
        //скрываем модальное окно
        _this4.setState({
          isOpen: !_this4.state.isOpen
        });
      }
    };

    _this4.toggleModal = function () {
      _this4.setState({
        isOpen: !_this4.state.isOpen
      });
    };

    _this4.deleteItem = function (idx) {
      var newItems = _this4.state.items;
      newItems.splice(idx, 1);
      _this4.setState({ items: newItems });
    };

    _this4.onSetSearch = _this4.onSetSearch.bind(_this4);
    _this4.state = {
      isOpen: false,
      searchText: '',
      items: [],
      allItems: [new Todo('Todo 1', 'Description 1', false), new Todo('Todo 2', 'Description 2', true), new Todo('Todo 3', 'Description 3', false)]
    };
    for (var i = 0; i < _this4.state.allItems.length; i++) {
      _this4.state.items.push(_this4.state.allItems[i]);
    }
    return _this4;
  }
  //скрытие модалього окна


  _createClass(App, [{
    key: "onSetSearch",
    value: function onSetSearch() {
      var text = document.querySelector('.inp_search').value;
      if (text.length >= 3 || text == '') {
        this.state.searchText = text;
        //ищем в первоначальном списке
        var newItems = [];
        for (var i = 0; i < this.state.allItems.length; i++) {
          if (this.state.allItems[i].title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 || this.state.allItems[i].description.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0) {
            console.log(this.state.allItems[i]);
            newItems.push(this.state.allItems[i]);
          }
        }
        this.state.items = newItems;
        this.forceUpdate();
      }
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
          ),
          React.createElement(
            "button",
            { type: "button", className: "button_add", onClick: this.toggleModal },
            " Add new task "
          )
        ),
        React.createElement(ItemsList, {
          items: this.state.items,
          searchText: this.state.searchText,
          clickAction: this.deleteItem }),
        React.createElement(
          Modal,
          {
            show: this.state.isOpen,
            addNewTask: this.addNewTask,
            onClose: this.toggleModal },
          React.createElement(
            "h2",
            null,
            "Add new task"
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));