import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Tasks } from '../../../api/tasks/tasks';

import '../task/task';
import './taskList.html';

Template.taskList.onCreated(function taskListOnCreated() {
});

Template.taskList.onRendered(function taskListOnRendered() {
});

Template.taskList.helpers({
  noMessages() {
    return Tasks.find({}).count() === 0;
  },
  messages() {
    return Tasks.find({});
  },
});

Template.taskList.events({
});
