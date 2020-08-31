import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.js';
import { connect } from 'react-redux';
import useStyles from '../jss/style';
import { tasks_fetch_data } from '../action/tasks.js'
import { withStyles } from "@material-ui/core/styles";

class ToDoList extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.root_list}>
        <ul className = {classes.Ul}>
          {this.props.tasks_items.map((task, index) => {
            return <ToDoItem key = {index} tasks_item = {this.props.tasks_items[index]} users_item = {this.props.users_items}/>
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(useStyles)(ToDoList);
