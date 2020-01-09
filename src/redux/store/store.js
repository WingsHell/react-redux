import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

const loggerMiddleware = store => next => action => {
    console.log(action);
    return next(action);
};

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //window.devToolsExtendtion ? window.devToolsExtention() : f => f
    ),
    
);

//store.subscribe(() => store.getState());

export default store;