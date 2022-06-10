import React, { useState } from 'react';
import styled from 'styled-components';

import { AppDispatch } from '../../redux/store';
import { addTask } from '../../redux/TodosRedux';

interface Props {
    displayAddTask: boolean,
    setDisplayAddTask: (boolean : boolean) => void,
    handleDisplayAddTask: () => void,
}

export const AddTodo : React.FC<Props> = ({handleDisplayAddTask,displayAddTask,setDisplayAddTask}) => {

    const dispatch = AppDispatch()
    const [inputValue,setInputValue] = useState("")

    const handleAddTask = () => {
        setDisplayAddTask(false)
        setInputValue("")
        dispatch(addTask(inputValue))
    }

  return (
    <Container displayAddTask={displayAddTask}>
        <Wrap>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Todo..." />
            <Submit onClick={() => handleAddTask()} >ADD TASK</Submit>
            <Cancel onClick={() => handleDisplayAddTask()} >CANCEL</Cancel>
        </Wrap>
    </Container>
  )
}

const Cancel = styled.button`
    border: 2px solid #e94848;
    transition: 200ms ease;
    &:hover {
        background-color:#e94848;
    }
`

const Submit = styled.button`
    border: 2px solid #66BB6A;
    transition: 200ms ease;
    &:hover {
        background-color: #66BB6A;
    }
`

const Input = styled.input`
    padding: 1em 2em;
    border: 2px solid rgb(240,240,240);
    border-radius: 10px;
`

const Wrap = styled.div`
    background-color: white;
    display: flex;
    padding: 2em;
    gap: 1em;
    flex-direction: column;
    max-width: 55%;
    max-height: 100%;
    button {
        padding: 1em;
        font-weight: 600;
        border-radius: 10px;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
    }
`

const Container = styled.div<{displayAddTask: boolean}>`
    width: 100vw;
    display: ${props => props.displayAddTask ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    z-index: 1;
    background-color: rgb(0,0,0,0.6);
`
