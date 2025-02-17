import { createStore, combineReducers } from 'redux';
import { userReducer } from './userReducer'; // Import user reducer

const rootReducer = combineReducers({
  user: userReducer, // Combine reducers for each part of your app
  // Add other reducers here (e.g., fleetReducer, jobCardReducer)
});

const store = createStore(rootReducer);

export default store;
