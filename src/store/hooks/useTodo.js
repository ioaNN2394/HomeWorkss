
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../slices/todoSlice';

const useTodo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  /**
   * Agrega un nuevo ToDo al estado.
   * @param {Object} todo - Objeto que representa el ToDo.
   */
  const addNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  /**
   * Elimina un ToDo del estado por su ID.
   * @param {number} id - ID del ToDo a eliminar.
   */
  const deleteExistingTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  /**
   * Alterna el estado de completado de un ToDo por su ID.
   * @param {number} id - ID del ToDo a alternar.
   */
  const toggleExistingTodo = (id) => {
    dispatch(toggleTodo(id));
  };


  const countTodos = todos.length;

  
  const countPendingTodos = todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addNewTodo,
    deleteExistingTodo,
    toggleExistingTodo,
    countTodos,
    countPendingTodos,
  };
};

export default useTodo;
