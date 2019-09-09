import uuid from 'uuid';

const preloadedState = {
    todos: [
        {
            id: uuid(),
            name: 'Try Reudx DevTools',
            complete: true
        },
        {
            id: uuid(),
            name: 'Share Redux Starter Kit',
            complete: false
        }
    ]
};

export default preloadedState;