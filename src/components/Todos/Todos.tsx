import React, { useEffect } from 'react';
import styled from 'styled-components';

import { AppDispatch, useAppSelector } from '../../redux/store';
import { removeTask, toggleTask } from '../../redux/TodosRedux';
import { Todo } from '../Todo/Todo';

interface Props {
  listHidden: boolean,
  // eslint-disable-next-line no-empty-pattern
  setFilteredList: ([]) => void,
  filteredList: {id : number,name: string,completed: boolean}[]
}

export const Todos : React.FC<Props> = ({filteredList,setFilteredList,listHidden}) => {
  
  const dispatch = AppDispatch()
  const Alltodos = useAppSelector(state => state.todos)
  const activeFilter = useAppSelector(state => state.filter)

  const handleTodosClick = (todosNumber : number) => {
    dispatch(toggleTask(todosNumber))
  }

  const handleRemoveTask = (todosNumber : number) => {
    dispatch(removeTask(todosNumber))
  }

  useEffect(() => {
    setFilteredList(Alltodos.filter(todo => {
      if(activeFilter === "All") {
        return true
      } else if(activeFilter === "Active") {
        return todo.completed === false
      } else if(activeFilter === "Completed") {
        return todo.completed === true
      } else {
        return true
      }
    }))
  },[Alltodos,activeFilter])

  return (
    <Container listHidden={listHidden}>
        {
            filteredList.map((todo,index) => <Todo key={todo.id} todosNumber={todo.id} handleRemoveTask={handleRemoveTask} handleTodosClick={handleTodosClick} todoStatus={todo.completed} todoName={todo.name} />)
        }
    </Container>
  )
}

const Container = styled.div<{listHidden : boolean}>`
    display: flex;
    max-height: ${props => props.listHidden === true ? "0px" : "1000px"};
    overflow: hidden;
    transition: 800ms 0s ease-in-out;
    flex-direction: column;
`
