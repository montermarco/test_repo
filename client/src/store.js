import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {itemReducer, itemDetailReducer, packageListReducer, packageDetailReducer, saleItemListReducer, saleItemDetailReducer} from './reducers/itemReducer';

const initialState = {};
const middleware = [thunk];
const reducer = combineReducers({
  items : itemReducer,
  item: itemDetailReducer,
  packages: packageListReducer,
  packageNoryan: packageDetailReducer,
  saleItems: saleItemListReducer, 
  saleItem: saleItemDetailReducer
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

