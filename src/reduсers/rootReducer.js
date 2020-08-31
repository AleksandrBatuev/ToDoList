import { combineReducers } from 'redux';
import { tasks } from './tasksReduce.js';
import { users } from './usersReduce.js';
import { news } from './newReduce.js';
import { del } from './delReduce.js';

const root_reducer = combineReducers ({
  tasks,
  users,
  news
});

export default root_reducer;
