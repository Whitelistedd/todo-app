import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';
import styled from 'styled-components';

interface Props {
    todoName: string,
    todoStatus: boolean,
    handleTodosClick: (todosNumber : number) => void,
    handleRemoveTask: (todosNumber : number) => void,
    todosNumber: number,
}

export const Todo : React.FC<Props> = ({todosNumber,handleRemoveTask,handleTodosClick,todoName,todoStatus}) => {

    return (
    <Container>
        <Check onClick={() => handleTodosClick(todosNumber)} todoStatus={todoStatus} />
        <TodoName todoStatus={todoStatus} >{todoName}</TodoName>
        <RemoveIcon onClick={() => handleRemoveTask(todosNumber)} />  
    </Container>
    )
}

const Check = styled(CheckIcon)<{todoStatus : boolean}>`
    color: ${props => props.todoStatus ? "#8AC9BB" : "transparent"};
    border: 2px solid #E6E6E6;
`

const TodoName = styled.p<{todoStatus : boolean}>`
    font-size: clamp(1em,5vw - 1em, 1.5em);
    color: ${props => props.todoStatus ? "grey" : "black"};
    text-decoration: ${props => props.todoStatus ? "line-through" : "none"};
    margin-right: auto;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5em 0.5em;
    gap: 1em;
    border-top: 1px solid grey;
    svg {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        &:hover {
            cursor: pointer;
        }
    }

    .checked {
        svg {
            color: green;
        }
    }
`