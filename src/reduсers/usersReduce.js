export function users(state_users = [], action) {
  switch (action.type) {
    case 'USERS_FETCH_DATA_SACCESS':
      return action.users;
    default:
      return state_users;
  }
}
