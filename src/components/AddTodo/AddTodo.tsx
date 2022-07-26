import React, { useState } from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'

import { AppDispatch } from '../../redux/store'
import { addTask } from '../../redux/TodosRedux'
import { Alert, Snackbar } from '@mui/material'

export const AddTodo: React.FC = () => {
  const dispatch = AppDispatch()
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleClose = () => {
    setError('')
  }

  const handleAddTask = () => {
    if (inputValue) {
      setError('')
      setInputValue('')
      dispatch(addTask(inputValue))
    } else {
      setError('please enter a task')
    }
  }

  return (
    <Container>
      <Wrap>
        <Snackbar
          open={error ? true : false}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Todo..."
        />
        <Submit onClick={() => handleAddTask()} />
      </Wrap>
    </Container>
  )
}

const Submit = styled(AddIcon)`
  &:hover {
    cursor: pointer;
  }
`

const Input = styled.input`
  padding: 1em;
  border: 1px solid #00000045;
  width: 100%;
`

const Wrap = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 0.2em;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em;
  gap: 1em;
  min-width: 25%;
  border-top: 1px solid grey;
`
