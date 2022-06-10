import React from 'react';
import styled from 'styled-components';

import { AppDispatch, useAppSelector } from '../../redux/store';
import { changeFilter, clearAllCompleted } from '../../redux/TodosRedux';

interface Props {
  todosLeft: number
}

export const TodosFooter : React.FC<Props> = ({todosLeft}) => {
  
  const activeFilter = useAppSelector(state => state.filter)
  const dispatch = AppDispatch()
  
  const handleFilters = (FilterType : string) => {
    dispatch(changeFilter(FilterType)) 
  }

  const ClearAllCompleted = () => {
    dispatch(clearAllCompleted())
  }

  return ( 
    <Container>
        <ItemCount>{todosLeft} items left</ItemCount>
        <Filters>
            <Filter className={activeFilter === "All" ? "active" : ""} onClick={() => handleFilters("All")} >All</Filter>
            <Filter className={activeFilter === "Active" ? "active" : ""} onClick={() => handleFilters("Active")} >Active</Filter>
            <Filter className={activeFilter === "Completed" ? "active" : ""} onClick={() => handleFilters("Completed")} >Completed</Filter>
        </Filters>
        <ClearTodos onClick={() => ClearAllCompleted()} >Clear completed</ClearTodos>
    </Container>
  )
}

const ClearTodos = styled.p``

const Filter = styled.p`
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    outline: 1px solid #EADBDA;
  }
`

const Filters = styled.div`
    display: flex;
    gap: 1em;
    p {
      padding: 0.1em 0.5em;
    }
    .active {
      outline: 1px solid #EADBDA;
    }
`

const ItemCount = styled.p``

const Container = styled.div`
    display: flex;
    font-size: clamp(0.7rem ,5vw - 1rem, 1rem);
    justify-content: space-between;
    gap: 1em;
    padding: 0.5em 1em;
    align-items: flex-end;
    color: grey;
    border-top: 1px solid grey;
`
