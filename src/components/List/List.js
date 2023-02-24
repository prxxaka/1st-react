import React from 'react'
import ToDoCard from '../TodoCard/TodoCard'

const List = ({ list, handleDone,handleDelete, search }) => {
  return (
    <>
      {list.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())).map((todo) => <ToDoCard
        key={todo.id}
        todo={todo}
        handleDone={handleDone}
        handleDelete={handleDelete}
        />)}
    </>
  )
}

export default List