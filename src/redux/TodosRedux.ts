import { createSlice } from '@reduxjs/toolkit';

interface initialStateTypes {
  todos: Array<{id: number, name: string,completed: boolean}>,
  filter: string,
  initialTodoID: number,
}

const initialState : initialStateTypes = {
  todos: [{id: 0, name: "Тестовое задание", completed: false},{id: 1, name: "Прекрасный код", completed: true},{id: 2, name: "Покрытие тестами", completed: false}],
  filter: "All",
  initialTodoID: 2,
}

const TodosList = createSlice({
  name: 'TodosList',
  initialState,
  reducers: {
    toggleTask: (state,{payload}) => {
      if(payload !== undefined) {
        const todo = state.todos.find(todo => todo.id === payload)
        todo!.completed = todo?.completed ? false : true
      }
    },
    changeFilter: (state,{payload}) => {
      state.filter = payload
    },
    clearAllCompleted: (state) => {
      state.todos = state.todos.map(todo => ({...todo,completed: false}))
    },
    addTask: (state,{payload}) => {
      state.initialTodoID += 1
      state.todos = [...state.todos,{id: state.initialTodoID, name: payload,completed: false}]
    },
    removeTask: (state,{payload}) => {
      state.initialTodoID -= 1
      state.todos = state.todos.filter(todo => todo.id !== payload)
    }
  },
})


export const { addTask,toggleTask,removeTask,changeFilter,clearAllCompleted } = TodosList.actions;
export default TodosList.reducer;