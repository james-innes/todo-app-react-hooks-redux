import uuid from 'uuid';

const preloadedState = {
    todos: [
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
    ]
};

export default preloadedState;