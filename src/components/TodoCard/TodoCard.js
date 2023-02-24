
import classes from './ToDoCard.module.css'
import Button from '../Button/Button'
const ToDoCard = ({ todo, handleDone, handleDelete }) =>
{
  return (
    <div className={classes.wrapperCard}>
      <div className={todo.completed ? classes.done : classes.todoCard }>
        <h3>{todo.title}</h3>
    </div>
    <Button onClick={handleDone} id={todo.id}>Done</Button>
    <Button onClick={handleDelete} id={todo.id}>Delete</Button>
    
    </div>
  )
  
}

export default ToDoCard