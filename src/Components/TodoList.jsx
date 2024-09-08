import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos, setTodos,showDone }) => {
  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id) => {
    console.log(id)
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {todos.map((item) => (
        (!item.isDone ||showDone) && (
          <Todo
            key={item.id}
            todo={item}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        )
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  showDone: PropTypes.bool.isRequired,
  setTodos: PropTypes.func.isRequired,
};