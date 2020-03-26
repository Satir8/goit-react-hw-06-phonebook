import { Type } from "./phoneBookActions";

export const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      return [...state, payload.value];

    case Type.DELETE_CONTACT:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};

export const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case Type.UPDATE_FILTER:
      return payload;

    default:
      return state;
  }
};
