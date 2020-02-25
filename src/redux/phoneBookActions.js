export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  UPDATE_FILTER: "UPDATE_FILTER"
};

export const addContact = value => ({
  type: Type.ADD_CONTACT,
  payload: { value }
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: { id }
});

export const updateFilter = value => ({
  type: Type.UPDATE_FILTER,
  payload: value
});
