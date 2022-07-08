import react, { Component } from "react";
import shortid from "shortid";
// import Counter from "./components/Counter";
// import DropDown from "./components/DropDown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/ToDoList";
import initialTodos from "./components/todos.json";
import TodoEditor from "./components/ToDoEditor";
// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import Form from "./components/Form";
import Filter from "./components/ToDoEditor/Filter";

const ColorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    // inputValue: "123",
  };

  //TodoEditor
  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
    //or destr
    // this.setState(({todos}) => ({
    //   todos: [todo, ...todos],
    // }));
  };

  deletetodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleComplited = (todoId) => {
    console.log(todoId);

    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  //input
  // handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ inputValue: event.target.value });
  // };

  //form
  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleTagChange = (event) => {
    console.log(event.target.value);
    this.setState({ tag: event.target.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
    //or
    //const visibleTodos = this.state.todos.filter(todo => todo.text.includes(this.state.filter));
  };

  getComplitedTodoCount = () => {
    const { todos, filter } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    //or
    // const completedTodosCount = todos.filter((todo) => todo.completed);
    // console.log(completedTodosCount.length);
    //
    const totalTodoCount = todos.length;
    const completedTodosCount = this.getComplitedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Form onSubmitProps={this.formSubmitHandler} /> */}

        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        {/* <h1> component status</h1> */}
        {/* <Counter initialValue={10} /> */}
        {/* <DropDown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}

        <div>
          <p>Have to do: {totalTodoCount}</p>
          <p>Done:{completedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeletetodo={this.deletetodo}
          onToggleComplited={this.toggleComplited}
        />
      </>
    );
  }
}

export default App;
