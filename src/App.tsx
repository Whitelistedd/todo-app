import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import styled from 'styled-components';

import { AddTodo } from './components/AddTodo/AddTodo';
import { Todos } from './components/Todos/Todos';
import { TodosFooter } from './components/TodosFooter/TodosFooter';
import { devices } from './MediaQueries';

function App() {

  const [listHidden,setListHidden] = useState(false)
  const [displayAddTask,setDisplayAddTask] = useState(false)
  const [filteredList,setFilteredList] = useState<{id: number,name: string,completed: boolean}[]>([])

  const handleHideList = () => {
    setListHidden(prev => prev === true ? false : true)
  }

  const handleDisplayAddTask = () => {
    setDisplayAddTask(displayAddTask ? false : true)
  }

  return (
    <Container>
      <AddTodo handleDisplayAddTask={handleDisplayAddTask} displayAddTask={displayAddTask} setDisplayAddTask={setDisplayAddTask} />
      <Title>todos</Title>
      <TodoContainer>
        <TodosTitleWrap >
          <KeyboardArrowDownIcon onClick={() => handleHideList()} sx={{transition: "500ms 0s ease-in-out",transform: `rotate(${listHidden && "-90deg"})`}} />
          <TodosTitle >What needs to be done?</TodosTitle>
          <AddIcon onClick={() => handleDisplayAddTask()} />
        </TodosTitleWrap>
        <Todos filteredList={filteredList} setFilteredList={setFilteredList} listHidden={listHidden} />
        <TodosFooter todosLeft={filteredList.length} />
      </TodoContainer>
    </Container>
  );
}

const TodosTitle = styled.h2`
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1em,5vw - 1em, 1.5em);
  margin-right: auto;
`

const TodosTitleWrap = styled.div`
  font-size: 16px;
  color: #bdbcbc;
  padding: 0.5em 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  svg:hover {
    cursor: pointer
  }
`

const Title = styled.h1`
  color: #EADBDA;
  font-size: clamp(4rem ,5vw - 1rem, 6rem);
  font-weight: 100;
`

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  background-color: white;
  min-width: 25%;
  box-shadow: 0px 0px 10px rgb(0,0,0,0.3);
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  justify-content: center;
  background-color: #F5F5F5;

  @media only screen and (max-width: ${devices.Mobile}) {
    ${TodoContainer} {
      min-width: 15%;
    }
  }
`

export default App;
