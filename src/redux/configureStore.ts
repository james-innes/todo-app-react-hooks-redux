import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'
import preloadedState from './preloadedState';
import reducer from './todosSlice';

const store = configureStore({
    reducer: {
        todos: reducer,
    },
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [reduxBatch]
})

export default store;