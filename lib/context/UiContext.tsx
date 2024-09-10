"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  menuIsOpen: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  menuIsOpen: true,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SHOWMENU":
      return { ...state, menuIsOpen: true };
    case "HIDEMENU":
      return { ...state, menuIsOpen: false};
    case "TOGGLEMENU":
      return { ...state, menuIsOpen: !state.menuIsOpen};
    default:
      return state;
  }
};

export const UiContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const UiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};
