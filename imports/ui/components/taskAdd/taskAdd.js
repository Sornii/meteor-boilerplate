import { Template } from 'meteor/templating';

import { insertTask } from '../../../api/tasks/methods';

import './taskAdd.html';

Template.taskAdd.onCreated(function taskOnCreated() {
});

Template.taskAdd.onDestroyed(function taskOnDestroyed() {
});

Template.taskAdd.helpers({
});

Template.taskAdd.events({
  'submit .new-task'(event) {
    event.preventDefault();
    const instance = Template.instance();
    const newTaskForm = instance.$('.new-task');

    const title = newTaskForm.form('get value', 'title');
    window.insertTask = insertTask;
    insertTask.call({ title });

    newTaskForm.form('clear');
  }
});
