import { createStore } from 'redux';
import { authyReducer } from './Authy/reducer';
export const store = createStore(authyReducer);