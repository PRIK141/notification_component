

export const addNotification = (
  {id,
  title,
  description,
  backgroundColor,
  color}
) => ({
  type: "ADD_NOTIFICATION",
  payload: { id, title, description, backgroundColor, color },
});

export const deleteNotification = id => ({
  type: "DELETE_NOTIFICATION",
  id,
});
