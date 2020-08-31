import React from 'react';
import useStyles from '../jss/style';
import Button from '../button/button.js';
import { tasks_fetch_data } from '../action/tasks.js'
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { del_fetch_data } from '../action/del.js';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  delet = () => {
    const data = {
      id: this.props.tasks_item.id
    };
    this.props.featchData_del('http://localhost:3001/delete_task', data)
  };

  plus_priority = () => {
    const data = {
      id: this.props.tasks_item.id,
      priority: this.props.tasks_item.priority
    };
    this.props.featchData_del('http://localhost:3001/priority_plus', data)
  };

  minus_priority = () => {
    const data = {
      id: this.props.tasks_item.id,
      priority: this.props.tasks_item.priority
    };
    this.props.featchData_del('http://localhost:3001/priority_minus', data)
    console.log(data);
  };

  Show_plus_priority = () => {
    if (this.props.tasks_item.priority === 10) ;
  }

  render () {
    const { classes } = this.props;
    return (
      <li className = {classes.item}>
        <p className = {classes.description_task}>{this.props.tasks_item.name}</p>
        {this.props.users_item.map((e, index) => {
          if (this.props.users_item[index].id === this.props.tasks_item.id_user)
            return <p key = {index} className = {classes.description_user}>{this.props.users_item[index].name}</p>
        })}
        <p className = {classes.description_priority}>{this.props.tasks_item.priority}</p>
        <div className = {classes.div_button}>
          <Button className = {classes.button_del} onClick = {this.delet}>
            Удалить
          </Button>
          {this.props.tasks.map((e, index) => {
            if (this.props.tasks_item.id === this.props.tasks[index].id && this.props.tasks_item.priority != 10) {
              return <Button key = {index} className = {classes.button_plus_prior} onClick = {this.plus_priority}>
                Повысить приоритет
              </Button>
            }
          })}
          {this.props.tasks.map((e, index) => {
            if (this.props.tasks_item.id === this.props.tasks[index].id && this.props.tasks_item.priority != 1) {
              return <Button key = {index} className = {classes.button_minus_prior} onClick = {this.minus_priority}>
                Понизить приоритет
              </Button>
            }
          })}
        </div>
      </li>
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
    featchData_del: (url, data) => dispatch(del_fetch_data(url, data))
  };
};

export default withStyles(useStyles)(connect(mapStateToTasks, mapDispatchToTasks)(ToDoItem));
