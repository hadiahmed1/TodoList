import {useState} from 'react'
import {v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
const AddTodo = ({todos,setTodos}) => {
  const [ip,setIp]=useState('');
  const addTodo=()=>{
    if(ip.trim() != ''){
        setTodos([...todos,{id:uuid(),task:ip, isDone:false}])
        setIp('');
    }
  };
  const handleIpChange=(e)=>{ setIp(e.target.value)}
  return (
    <div className='p-4 flex mx-auto text-xl'>
        <input onChange={handleIpChange} value={ip} type="text" placeholder="Enter Todo" className='p-3 roubd rounded-l-lg'/>
        <button onClick={addTodo} className='bg-blue-400 p-3 rounded-r-lg border-spacing-2 border-black'>Add Todo</button>
    </div>
  )
}
AddTodo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default AddTodo