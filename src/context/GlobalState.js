import "react-toastify/dist/ReactToastify.css";
import React, { createContext, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase";
import AppReducer from "./AppReducer";
import { firestore, fieldValue } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

const initialState = {
  user: null,
  quotes: null,
};

export const GlobalContext = createContext(initialState);

let unsubscribeFromAuth = null;
let unsubscribeFromQuotes = null;
let quotesRef = firestore.collection("quotes");

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const setQuotes = (quotes) => {
    dispatch({
      type: "SET_QUOTES",
      payload: quotes,
    });
  };

  const handleLike = async (quote) => {
    if (!state.user) {
      toast.error("Please sign in!");
      return;
    }

    await quotesRef.doc(`${quote.id}`).update({
      likes: fieldValue.arrayUnion(state.user.uid),
    });
  };

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => setUser(user));

    unsubscribeFromQuotes = firestore
      .collection("quotes")
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(collectIdsAndDocs);
        setQuotes(data);
      });

    return () => {
      unsubscribeFromAuth();
      unsubscribeFromQuotes();
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        quotes: state.quotes,
        handleLike,
      }}
    >
      {children}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </GlobalContext.Provider>
  );
};
