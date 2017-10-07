/** global: CryptoJS */

import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import { LoggedInMixin } from '../../utils/loggedin-mixin';
import { Tasks } from './tasks';

export const insertTask = new ValidatedMethod({
  name: 'tasks.insert',
  //mixins: [LoggedInMixin],
  validate: new SimpleSchema({
    title: { type: String, max: 140 },
  }).validator(),
  run({ title }) {
    const createdAt = new Date();
    // const userId = this.userId;
    return Tasks.insert({ createdAt, title/*, userId*/ });
  },
});
