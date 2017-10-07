import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Tasks = new Mongo.Collection('Tasks');

Tasks.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const TaskSchema = new SimpleSchema({
  createdAt: {
    type: Date,
  },
  title: {
    type: String,
    max: 140,
  },
  /*userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }*/
});

Tasks.helpers({
});

Tasks.attachSchema(TaskSchema);
