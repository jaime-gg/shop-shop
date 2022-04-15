import {
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS,
    UPDATE_CURRENT_CATEGORY
} from "./actions"

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type valie is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state, 
                products: [...action.products], 
            }; 
        
        // if none of these actions, do not update state at all and keel things the same!
        default: 
            return state; 
    }
} 