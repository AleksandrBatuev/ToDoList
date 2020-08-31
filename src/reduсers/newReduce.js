export function news(state_new = [], action) {
  switch (action.type) {
    case 'NEW_FETCH_DATA_SACCESS':
      return action.tasks;
    default:
      return state_new;
  }
}
