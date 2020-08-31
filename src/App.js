import React from 'react';
import ToDoNew from './ToDoNew/ToDoNew.js';
import ToDoList from './ToDoList/ToDoList.js';
import { connect } from 'react-redux';
import { tasks_fetch_data } from './action/tasks.js';
import { users_fetch_data } from './action/users.js';

class App extends React.Component {

  componentDidMount() {
    this.props.featchData_tasks('http://localhost:3001/task_list')
    this.props.featchData_users('http://localhost:3001/user_list')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.props.featchData_tasks('http://localhost:3001/task_list')
    }
  }

  render() {
    return (
      <div>
        <ToDoNew users_items = {this.props.users}/>
        <ToDoList tasks_items = {this.props.tasks} users_items = {this.props.users}/>
      </div>
    );
  }
}

const mapStateToTasks = (state) => {
  return {
    tasks: state.tasks,
    users: state.users
  };
};

const mapDispatchToTasks = (dispatch) => {
  return {
    featchData_tasks: url => dispatch(tasks_fetch_data(url)),
    featchData_users: url => dispatch(users_fetch_data(url))
  };
};

export default connect(mapStateToTasks, mapDispatchToTasks)(App);
