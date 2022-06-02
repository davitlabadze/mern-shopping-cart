import {legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
    
//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProduct: getProductsReducer,
    getProductDetail: getProductDetailsReducer
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.get("cart") ? JSON.parse(localStorage.getItem("cart")) : [] 

const INITIAL_STATE = {
    cart: {
        cartItems:cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;