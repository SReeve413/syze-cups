
import {ADD_TO_CART} from "../actions";

export default (state = [...CART_DEFAULT], action = {}) => {

    switch (action.type) {
        case ADD_TO_CART :
            return [...state, {
                ...action.product,
                quantity: action.quantity,
                subtotal: action.product.price * action.quantity,
            }]
    }

    return state
}

const CART_DEFAULT = []