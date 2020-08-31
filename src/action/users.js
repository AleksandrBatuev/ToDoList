export function users_fetch_data_success(users) {
  return {
    type: 'USERS_FETCH_DATA_SACCESS',
    users
  }
}
export function users_fetch_data(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(users => dispatch(users_fetch_data_success(users)))
  }
}
