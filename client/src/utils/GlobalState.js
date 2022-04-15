import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;


const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [], 
        categories: [],
        currentCategory: '', 
    })
    console.log(state) // use this in order to confirm it works
    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };