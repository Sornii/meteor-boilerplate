/** global: CryptoJS */

import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { TAPi18n } from 'meteor/tap:i18n';

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
    return Tasks.insert({ createdAt, title });
  },
});
