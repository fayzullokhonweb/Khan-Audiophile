import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "INITIAL_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    data: null,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
