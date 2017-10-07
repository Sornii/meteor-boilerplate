import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

import moment from 'moment';

import LanguageSettings from '../../utils/language-settings';

import './routes';

Meteor.startup(() => {
  TAPi18n.setLanguage(LanguageSettings.retrieveLanguage());
  moment.locale(LanguageSettings.retrieveLanguage());

  Template.registerHelper('stringify', first => JSON.stringify(first));
});
