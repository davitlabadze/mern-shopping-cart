import * as actionType from '../constants/cartConstants';

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(actionType){
        case actionType.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((x)=> x.product === item.product);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x)=> x.product === existItem.product ? item : x)
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        
        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter((x)=> x.product !== action.payload)
            }

        default:
            return state;
    }
}



