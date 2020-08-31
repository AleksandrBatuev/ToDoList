export function del_fetch_data_success(tasks) {
  return {
    type: 'DEL_FETCH_DATA_SACCESS',
    tasks
  }
}
export function del_fetch_data(url, data) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(tasks => dispatch(del_fetch_data_success(tasks)))
  }
}
