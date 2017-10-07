import { Meteor } from 'meteor/meteor';

import { Tasks } from '../tasks';

Meteor.publish('allTasks', () => {
  return Tasks.find({});
});

/*
Meteor.publish('tasks.private', () => {
  if (!this.userId) {
    return this.ready();
  }

  return Tasks.find({
    userId: this.userId
  });
});
*/
