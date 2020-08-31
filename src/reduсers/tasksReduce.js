export function tasks(state_tasks = [], action) {
  switch (action.type) {
    case 'TASKS_FETCH_DATA_SACCESS':
      return action.tasks;
    default:
      return state_tasks;
  }
}
