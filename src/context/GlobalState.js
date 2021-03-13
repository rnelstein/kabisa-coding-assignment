import "react-toastify/dist/ReactToastify.css";
import React, { createContext, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase";
import AppReducer from "./AppReducer";
import { firestore, fieldValue } from "../firebase";
import { collectIdsAndDocs, likesIncludesId } from "../utilities";

const initialState = {
  user: null,
  quotes: null,
  likedQuotes: [],
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
    let isLiked;
    if (quote.likes) {
      isLiked = likesIncludesId(quote.likes, state.user.uid);
    }
    await quotesRef.doc(`${quote.id}`).update({
      likes: !isLiked
        ? fieldValue.arrayUnion(state.user.uid)
        : fieldValue.arrayRemove(state.user.uid),
    });
  };

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => setUser(user));

    unsubscribeFromQuotes = firestore
      .collection("quotes")
      .onSnapshot((snapshot) => {
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
        likedQuotes: state.likedQuotes,
        handleLike,
      }}
    >
      {children}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </GlobalContext.Provider>
  );
};
