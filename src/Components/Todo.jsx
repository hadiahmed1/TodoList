import PropTypes from 'prop-types';
import del from '../assets/delete.png'
export const Todo = ({ todo, handleDone,handleDelete}) => {
  return (
    <div className='flex items-center justify-between mx-3 my-1 bg-blue-400 px-2 rounded-md text-2xl py-1'>
        <input
          style={{
            width: '1rem',
            height: '1rem',
            verticalAlign: 'middle',
          }}
          key={todo.id}
          name={todo.id}
          onChange={() => handleDone(todo.id)}
          type="checkbox"
        />
        <span className='ml-2'>{todo.task}</span>
        <button style={{
            width: '1.5rem',
            height: '1.5rem',
            verticalAlign: 'middle',
          }}
          onClick={()=>handleDelete(todo.id)}><img src={del}></img></button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};