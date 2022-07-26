import reducer from './state';

import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from 'redux';
        
const store  = createStore(reducer, applyMiddleware(thunk));
// const store = createStore( reducer );
export default store;

