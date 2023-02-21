const root = document.getElementById('root');
function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');
  function generateId() {
    return Date.now();
  }
  function saveTodoHendler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage('Nama activity jangan kosong');
    }
    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cencleEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setMessage('');
    setActivity('');
  }
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cencleEditHandler();
  }
  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  function cencleEditHandler() {
    setEdit({});
    setActivity('');
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHendler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama",
    value: activity,
    onChange: nilai => setActivity(nilai.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'save' : 'add'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cencleEditHandler
  }, "batal edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("i", null, "Tidak ada todo"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);