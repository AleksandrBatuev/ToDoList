export function tasks_fetch_data_success(tasks) {
  return {
    type: 'TASKS_FETCH_DATA_SACCESS',
    tasks
  }
}
export function tasks_fetch_data(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(tasks => dispatch(tasks_fetch_data_success(tasks)))
  }
}
