import React from 'react';
import useStyles from '../jss/style';
import Button from '../button/button.js';
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { new_fetch_data } from '../action/new.js';

class ToDoNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      priority: '',
      id_user: '',
      priority_error: '',
      priority_valide: false
    };
  }

  Click_new = () => {
    {this.props.users_items.map((user, index) => {
      if (user.name === this.state.id_user) {
        return this.state.id_user = user.id;
      }
    })};
    if (this.state.name && this.state.priority_valide && this.state.id_user) {
      const data = {
        name: this.state.name,
        priority: parseInt(this.state.priority),
        id_user: this.state.id_user
      };
      this.props.featchData_new('http://localhost:3001/new_task', data);
      this.setState({name: ''});
      this.setState({priority: ''});
    }
  };

  task_change = event => {
      this.setState({name: event.target.value})
  };

  id_user_change = event => {
    this.setState({id_user: event.target.value})
  };

  priority_change = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({priority: value},
      () => { this.validate_field(name, value) });
  };

  validate_field = (field_name, value) => {
    let field_validation_errors = this.state.priority_error;
    let priority_valid = this.state.priority_valide;
    switch(field_name) {
      case 'priority':
        priority_valid = (value > 0 && value < 11);
        field_validation_errors = (priority_valid) ? '' : 'Приоритет должен быть от 1 до 10';
        break;
        default:
        break;
    };
    this.setState({priority_error: field_validation_errors, priority_valide: priority_valid});
  };

  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.root}>
        <h2>TODO APP</h2>
        <div className = {classes.new}>
          <textarea className = {classes.new_description} onChange = {this.task_change} value={this.state.name}  placeholder="Описание">
          </textarea >
          <select onChange = {this.id_user_change} value={this.state.id_user} className = {classes.user_selest}>
            <option>не выбрано</option>
            {this.props.users_items.map((user, index) => {
              return <option key = {index}>{user.name}</option>
            })}
          </select>
          <form>
            <input onChange = {this.priority_change} value={this.state.priority}  name = "priority" className = {classes.select_priority} placeholder = 'Приоритет' required/>
          </form>
          <Button className = {classes.button_new} onClick = {this.Click_new}>Добавить Задачу</Button>
        </div>
        <div className = {classes.priority_error}>
          {this.state.priority_error}
        </div>
      </div>
    );
  }
}

const mapStateToTasks = (state) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToTasks = (dispatch) => {
  return {
    featchData_new: (url, data) => dispatch(new_fetch_data(url, data))
  };
};

export default withStyles(useStyles)(connect(mapStateToTasks, mapDispatchToTasks)(ToDoNew));
