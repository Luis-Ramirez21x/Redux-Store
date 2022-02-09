import React from "react";
import { useProductReducer } from './reducers'

//redux import
import { Provider } from 'react-redux';
import store from './store';


export default function StoreProvider(props){
  return <Provider store={store} {...props} />;
};
//const StoreContext = createContext();
//const { Provider } = StoreContext;
/*
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });
};*/

 


  /*
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
*/