import { Meteor } from 'meteor/meteor';

import { Tasks } from '../tasks';

Meteor.publish('allTasks', () => {
  return Tasks.find({});
});
