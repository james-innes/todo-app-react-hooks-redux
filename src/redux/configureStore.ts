import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'
import preloadedState from './preloadedState';
import { loadState, saveState } from './localStorage'
import reducer from './todosSlice';
import { throttle } from 'lodash';

const store = configureStore({
    reducer: {
        todos: reducer,
    },
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: (persistedState),
    enhancers: [reduxBatch]
})

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

export default store;
