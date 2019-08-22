import { createSlice, PayloadAction } from 'redux-starter-kit';
import uuid from 'uuid';

const initialState = [
  {
    id: uuid(),
    name: 'Read a bit',
    complete: true
  },
  {
    id: uuid(),
    name: 'Do laundry',
    complete: false
  }
];


interface IAddTodo {
  id: string;
  name: string;
  complete: boolean;
}

interface IUpdateNameTodo {
  id: any;
  name: string;
}

interface IToggleTodo {
  id: string;
  complete: boolean;
}

interface IDeleteTodo {
  id: string;
}

const todosSlice = createSlice({
  slice: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IAddTodo>) {
      state.push(action.payload);
    },
    updateNameTodo(state, action: PayloadAction<IUpdateNameTodo>) {
      const { id, name } = action.payload
      const todo = state.find(todo => todo.id === id);
      todo && (todo.name = name);
    },
    toggleTodo(state, action: PayloadAction<IToggleTodo>) {
      const todo = state.find((todo: any) => todo.id === action.payload.id);
      todo && (todo.complete = action.payload.complete);
    },
    deleteTodo(state, action: PayloadAction<IDeleteTodo>) {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
  }
});

export const { addTodo, updateNameTodo, toggleTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer