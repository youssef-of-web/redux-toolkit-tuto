import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productReducer } from "./reducers/products.reducer";

const authConfig = {
  key: "auth",
  storage,
  whiteList: ["connected", "data"],
  blacklist: [],
};

const persistedauthReducer = persistReducer(authConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedauthReducer,
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
