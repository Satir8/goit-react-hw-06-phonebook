import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { contactReducer, filterReducer } from "./phoneBookReducers";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
