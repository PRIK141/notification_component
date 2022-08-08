import { createStore, combineReducers } from 'redux';
import reducer from "../reducer";


const rootReducer = combineReducers({
  notification: reducer,
  
});

const store = createStore(
  rootReducer,
+ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;