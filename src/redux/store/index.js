import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from "../reducers/index";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'api_test',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  AppReducer
);

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(persistedReducer, initialState, enhancer);
}

export const store = configureStore({});
export const persistor = persistStore(store);
