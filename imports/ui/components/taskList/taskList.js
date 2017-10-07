import { Template } from 'meteor/templating';

import { Tasks } from '../../../api/tasks/tasks';

import '../taskItem/taskItem';
import './taskList.html';

Template.taskList.onCreated(function taskListOnCreated() {
  this.autorun(() => {
    this.subscribe('allTasks');
  });
});

Template.taskList.onRendered(function taskListOnRendered() {
});

Template.taskList.helpers({
  noTasks() {
    return Tasks.find({}).count() === 0;
  },
  tasks() {
    return Tasks.find({});
  },
});

Template.taskList.events({});
