export function news(state_del = [], action) {
  switch (action.type) {
    case 'DEL_FETCH_DATA_SACCESS':
      return action.tasks;
    default:
      return state_del;
  }
}
