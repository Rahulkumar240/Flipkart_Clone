
import * as actionType from '../constants/cartConstant';


export const cartReducer = (state = { cartItems: []},action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product=>product.id===item.id)

            if(exist){
                return {...state, cartitems: state.cartItems.map(data => data.id === exist.id ? item : data)}
            }else{
                return {...state, cartItems: [...state.cartItems, item]}
            }
        case actionType.REMOVE_FROM_CART:
            return { ...state, cartitems: state.cartitems.filter(product => product.id !== action.payload)}
        default:
            return state;
    }
}